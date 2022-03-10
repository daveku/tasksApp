const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use("/api/v1/tasks", require("./routes/tasksRoutesV1"));

app.listen(port, () => console.log(`El servidor inicio en el puerto: ${port}`));
