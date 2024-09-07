const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const corsOptions = {
  origin: [
    'http://localhost:3000', 
  ],
  credentials: true,
  optionSuccessStatus: 200,
}
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};
app.use(cors(corsOptions)) 
app.use(express.json())
app.use(cookieParser())

app.post('/jwt', async (req, res) => {
  const email = req.body

  const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '365d',
  })
  res
    .cookie('token', token,  {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .send({ success: true })
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(3005)

  
const array = [1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
const dubul = []
for (let i = 0; i < array.length -1; i++) {
  for (let j = i +1; j < array.length; j++) {
    if (array[j] === array[i] ) {
      dubul.push(array[i])
      console.log(array)
    }
    
  }
  
}
console.log(dubul) // output [1, 5]
