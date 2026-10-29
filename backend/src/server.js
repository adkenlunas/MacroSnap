import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({ message: "Welcome to MacroSnap!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});