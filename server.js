const router = require("./routes");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose"); 

const app = express();

app.use(express.json()); 

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});





