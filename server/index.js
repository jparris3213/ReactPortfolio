const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req,res) => {
    res.json({ message: "Hello from server! This is a CLEAN Plate for Further Dev"});
});





app.listen(PORT, () => {
    console.log(`Server listening on https://localhost:${PORT}`);
})