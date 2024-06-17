const express = require("express");


//importing .env and configuration
require("dotenv").config();





// express object
const app = express();

//rest api

app.get("/", (req, res) => {
  res.send("<h1> vijayanand</h1>");
});


//port

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});