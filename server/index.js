const express = require("express");
const fs = require('fs');
//const Img = require('./models/Images')


const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req,res) => {
    res.json({ message: "🟢"});
});


app.listen(PORT, () => {
    console.log(`Server listening on https://localhost:${PORT}`);
})