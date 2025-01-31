const express = require('express')
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

app.use(cors('*'))
app.use(express.json()) 

const sqlconnect = mysql.createConnection({
  host:"localhost",
  user:'root',
  password:'',
  database:'demoStudentData'
})

sqlconnect.connect((err)=>{
    console.log('connected');
})


// app.post('/',(req,res)=>{
//     const {email,pasword} = req.body;
//     const query = `INSERT INTO users ()`

    

// })



app.listen(4000,()=> console.log('https://localhost:4000'))