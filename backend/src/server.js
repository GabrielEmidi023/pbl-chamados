const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'dev_user',
    password: process.env.DB_PASSWORD || 'password123',
    database: process.env.DB_NAME || 'salas_db',
    port: 5432
});


app.get('/salas', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM salas ORDER BY id DESC');
        res.json(result.rows);
    } catch (err) { 
        res.status(500).json({ erro: err.message }); 
    }
});


app.post('/salas', async (req, res) => {
    try {
        const { nome, capacidade } = req.body;
        const result = await pool.query(
            'INSERT INTO salas (nome, capacidad) VALUES ($1, $2) RETURNING *', 
            [nome, capacidade]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) { 
        res.status(500).json({ erro: err.message }); 
    }
});


app.listen(3000, () => console.log('Backend de Salas rodando na porta 3000'));