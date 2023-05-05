const express = require('express');
const cors = require('cors');
const db =require('./db-config')
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());
app.use(express.json())

db.connect((err)=>{
  if(err) throw err;
  console.log('Connected to database');
})


app.get("/", (req, res) => {
  res.json({message:'Server Connection established'})})

  ////////////////////////////////SIGN UP
app.post("/register",(req,res)=>{
  const sql = "INSERT INTO users ('name', 'email','password') VALUES (?)"
  const values = [req.body.name, req.body.email, req.body.password]
  db.query(sql, values, (err, data) => {
    if(err) {return res.json("Error")};
    return res.json(data);
  })
})

////////////////////////////////LOG IN
app.post("/",(req,res)=>{
  const sql = "SELECT * FROM users WHERE email =? AND password =?"
  const values = [req.body.email, req.body.password]
  console.log(req.body)
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if(err) {return res.json("Credentials Error")};
    if(data.length === 0) {return res.json({succes:false})};
    return res.status(200).json({success: true})
  })
})

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});


