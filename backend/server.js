const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const dotenv = require('dotenv');
const messageRoutes = require("./Routes/userDetails");


dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/messages', messageRoutes);


//server setup

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
