const express = require("express");
const hexRoutes = require("./routes/utils/hex");

const app = express();
app.use("/api", hexRoutes);

module.exports = app;