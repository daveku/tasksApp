const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/tasks", require("./routes/tasksRoutesV1"));

app.use(errorHandler);
app.listen(port, () => console.log(`El servidor inicio en el puerto: ${port}`));
