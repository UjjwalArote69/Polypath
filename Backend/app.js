const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const corsOptions = require("./config/corsOptions");

const userRoutes = require("./routes/user.route");
const skillRoutes = require("./routes/skill.route");
const journalRoutes = require("./routes/journal.route");

dotenv.config();
connectDB();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Polypath Backend API is running");
});

app.use("/api/users", userRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/journals", journalRoutes);


module.exports = app;
