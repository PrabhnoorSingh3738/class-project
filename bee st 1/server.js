const express = require('express');
const{ default: mongoose} = require('mongoose');
const db = require('./middleware/db')
const app = express();
app.use(express.json())
db.connectToDB()

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');


app.listen(3000, ()=>{
    console.log('Server is started on 3000')
})