const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();
const connectMongodb = require("./init/mongodb");
const { authRoute, categoryRoute, fileRoute, postRoute } = require("./routes");
const { errorHandler } = require("./middlewares");
const notfound = require("./controllers/notfound");

// init app
const app = express();

// connect database
connectMongodb();

// third-party middleware
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(morgan("dev"));

// route section
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/file", fileRoute);
app.use("/api/v1/posts", postRoute);

// not found route
app.use("*", notfound);

// error handling middleware
app.use(errorHandler);

module.exports = app;
