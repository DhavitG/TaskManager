const express = require("express");
const app = express();

// Routes
app.get("/hello", function (req, res) {
  res.send("Task manager application");
});

const port = 5002;

app.listen(port, console.log(`Server is listening on port ${port}...`));
