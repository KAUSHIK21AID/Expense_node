const mongoose = require('mongoose')
const expenseschema = new mongoose.Schema({
    id: Number,
    description: String,
    amount: Number,
});
const Expense = mongoose.model('expenses',expenseschema);
module.exports = Expense;

