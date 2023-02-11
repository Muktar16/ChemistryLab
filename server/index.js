const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routerIndex = require('./routes/index.router');
const cors = require("cors");
app.use(cors());

dotenv.config();

//connect to db
mongoose.connect(process.env.MONGODB_URL, (err) => {
    if (!err) { console.log("connected to",process.env.MONGODB_URL); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

//route middleware
app.use("/chemistry_lab/api",routerIndex);

app.listen(4000,()=>console.log("Server Started at port: 4000"));