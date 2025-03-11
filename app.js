const express = require("express");
const app = express();

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// Middlewares
app.use(express.json());

// Routes
app.get("/hello", function (req, res) {
  res.send("Task manager application");
});

app.use("/api/v1/tasks", tasks);

const port = 5002;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (e) {
    console.log(e);
  }
};

start();
