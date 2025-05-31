const Book = require('../models/Book');
const Borrow = require('../models/Borrow');


exports.getAllBorrows = async (filter = {}) => {
    return await Borrow.find(filter)
        .populate('book')
        .populate('user') // optional if you want user info
        .sort({ borrowDate: -1 });
};
exports.borrowBook = async (userId, bookId, dueDate, notes = '') => {
    const book = await Book.findById(bookId);
    if (!book) throw new Error('Book not found');
    if (book.available <= 0) throw new Error('No available copies');

    const borrow = new Borrow({
        book: book._id,
        user: userId,
        dueDate,
        notes
    });

    await borrow.save();
    book.available -= 1;
    await book.save();

    return borrow;
};

exports.returnBook = async (borrowId) => {
    const borrow = await Borrow.findById(borrowId).populate('book');
    if (!borrow) throw new Error('Borrow record not found');
    if (borrow.status !== 'borrowed') throw new Error('Book already returned');

    borrow.status = 'returned';
    borrow.returnDate = new Date();

    // Calculate fine (e.g. 1000 VND/day late)
    const now = new Date();
    if (borrow.dueDate < now) {
        const daysLate = Math.ceil((now - borrow.dueDate) / (1000 * 60 * 60 * 24));
        borrow.fine = daysLate * 1000;
    }

    await borrow.save();

    const book = borrow.book;
    book.available += 1;
    await book.save();

    return borrow;
};