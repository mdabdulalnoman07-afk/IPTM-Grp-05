const express = require("express");
const cors = require("cors");
const students = require("./students");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/student", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
