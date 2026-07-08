import express, { Request, Response } from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import pool from "./db";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("JWT_SECRET is not defined in the environment variables.");
}

app.use(cors());
app.use(express.json());

// Status
app.get("/api/status", (res: Response) => {
  res.json({ message: "Backend server is running successfully!" });
});

// Register (Sign-up)
app.post("/api/register", async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Please provide both email and password." });
  }

  try {
    const userCheck = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (userCheck.rows.length > 0) {
      return res
        .status(400)
        .json({ error: "A user with this email already exists." });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await pool.query(
      "INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email, created_at",
      [email, hashedPassword],
    );

    res.status(201).json({
      message: "User registered successfully.",
      user: newUser.rows[0],
    });
  } catch (err: any) {
    console.error("Registration error:", err.message);
    res.status(500).json({ error: "Server error during registration." });
  }
});

// Login
app.post("/api/login", async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Please provide both email and password." });
  }

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, secret, {
      expiresIn: "24h",
    });

    res.json({
      message: "Login successful!",
      token: token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (err: any) {
    console.error("Login error:", err.message);
    res.status(500).json({ error: "Server error during login." });
  }
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
