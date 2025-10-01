const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const blogRoutes = require("./routes/blogRoutes");
const dbURI = process.env.DB_URI;
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://codematrix-mern.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json({ extended: true }));

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));

app.use("/blogs", blogRoutes);
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
