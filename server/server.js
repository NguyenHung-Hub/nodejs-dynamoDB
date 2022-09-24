const express = require("express");
const AWS = require("aws-sdk");
const multer = require("multer");
const config = require("./src/config");
const route = require("./src/routes");
const createError = require("http-errors");

const app = express();
const PORT = config.PORT || 8081;

app.use(express.json());

route(app);

app.use((req, res, next) => {
    next(createError.NotFound("This route does not exist."));
});

app.use((err, req, res, next) => {
    res.json({
        status: err.status || 500,
        message: err.message,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
