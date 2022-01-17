const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req,res) => {
    res.json({ message: "If you can read this: The server is active..."});
});





app.listen(PORT, () => {
    console.log(`Server listening on https://localhost:${PORT}`);
})