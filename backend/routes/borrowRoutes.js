const express = require('express');
const router = express.Router();
const borrowService = require('../service/borrowService');

// Borrow a book
router.post('/', async (req, res) => {
    const { userId, bookId, dueDate, notes } = req.body;
    try {
        const result = await borrowService.borrowBook(userId, bookId, dueDate, notes);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Return a book
router.post('/:id/return', async (req, res) => {
    try {
        const result = await borrowService.returnBook(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all borrowed books
router.get('/', async (req, res) => {
    try {
        const result = await borrowService.getAllBorrows();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;