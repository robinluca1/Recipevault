import express, { Request, Response } from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import pool from './db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Status
app.get('/api/status', (req: Request, res: Response) => {
    res.json({ message: 'Backend server is running successfully!' });
});

// Register (Sign-up)
app.post('/api/register', async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;

    // Check if user already exists in db
    if (!email || !password) {
        return res.status(400).json({ error: 'Please provide both email and password.' });
    }

    try {
        const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ error: 'A user with this email already exists.' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await pool.query(
            'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email, created_at',
            [email, hashedPassword]
        );

        res.status(201).json({
            message: 'User registered successfully.',
            user: newUser.rows[0]
        });

    } catch (err: any) {
        console.error('Registration error:', err.message);
        res.status(500).json({ error: 'Server error during registration.' });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
