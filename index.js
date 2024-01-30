const express = require('express')
const mongoose = require('mongoose');
const Expense = require('./expense');
mongoose.connect('mongodb+srv://kaushikb21aid:kaushikb@cluster0.hdhrtan.mongodb.net/newdb?retryWrites=true&w=majority',{
    useUnifiedTopology: true
})
const app = express()
app.get('/expense',async(req,res)=>{
    const result = await Expense.find()
    console.log(result);
    res.send(result);
});

// app.get('/:amount', async (req, res) => {
//     try {
//         const id = (req.params.amount);

//         const result = await Expense.findOneAndDelete({ amount: id });

//         console.log(result);

//         if (result) {
//             res.send(result);
//         } else {
//             res.send("No record by the ID");
//         }
//     } catch (err) {
//         console.log(err);
//         res.send(err);
//     }
// });

// app.get('/:amount', async (req, res) => {
//     try {
//         const id = (req.params.amount);
//         const updobj = req.body;
//         const upddobj = await Expense.findOneAndUpdate({ amount: id },{$set:{"amount":3000}},{$set: updobj},{new: true});
//         res.send(upddobj);
//         // console.log(result);

//         // if (result) {
//         //     res.send(result);
//         // } else {
//         //     res.send("No record by the ID");
//         // }
//     } catch (err) {
//         console.log(err);
//         res.send(err);
//     }
// })


app.post('/expense',async(req,res)=>{
    console.log(req.body);
    const newExpense = req.body;
    await Expense.create(newExpense);
    res.send('Created');
});

// app.delete('/expense/:id',async(req,res)=>{
//     try{
//         const id = req.params.id;
//         const result = await Expense.findByIdAndDelete(id);
//         if(result)
//         {
//             res.send(result);
//         }
//     }
//     catch(err){
//         console.log(err);
//         res.send("Error occured!")
//     }
// });

app.listen(3000);