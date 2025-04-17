const express = require('express');
const router = express.Router();
const createDbConnection = require('../config/db');
const { foods } = require('../models/foods');

router.get('/test-db', async (req, res) => {
  try {
    const { db, pool } = createDbConnection();
    await pool.connect();
    const foodItems = await db.select().from(foods).limit(5);
    res.json(foodItems);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      error: 'Database connection failed', 
      details: error.message,
      stack: error.stack,
      config: process.env.DATABASE_URL ? 'DATABASE_URL is set' : 'DATABASE_URL is not set'
    });
  }
});

module.exports = router;