import express, { Request, Response } from 'express';
import cors from 'cors';
import pool from './db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/status', (req: Request, res: Response) => {
    res.json({ message: 'Success' });
});

// Fetch data
/*app.get('/api/users', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM xxx');
        res.json(result.rows);
    } catch (err: any) {
        console.error(err.message);
        res.status(500).send('db error');
    }
});*/

app.listen(PORT, () => {
    console.log(`Server luistert op http://localhost:${PORT}`);
});
