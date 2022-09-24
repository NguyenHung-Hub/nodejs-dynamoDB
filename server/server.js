const express = require("express");
const AWS = require("aws-sdk");
const multer = require("multer");
const config = require("./src/config");
const route = require("./src/routes");

const app = express();
const upload = multer();
const PORT = 3000;

app.use(express.json());

console.log({
    accessKeyId: config.ACCESSKEYID,
    secretAccessKey: config.SECRETACCESSKEY,
    region: config.REGION,
});

//AWS config
// const configAWS = new AWS.Config({
//     accessKeyId: config.ACCESSKEYID,
//     secretAccessKey: config.SECRETACCESSKEY,
//     region: config.REGION,
// });

// AWS.config = configAWS;

// const docClient = new AWS.DynamoDB.DocumentClient();

route(app);

// app.get("/", (req, res, next) => {
//     const params = {
//         TableName: tableName,
//     };

//     docClient.scan(params, (error, data) => {
//         if (error) {
//             res.status(500).json({ error });
//         } else {
//             res.status(200).json({ data });
//         }
//     });
// });

// app.post("/", upload.fields([]), (req, res, next) => {
//     console.log(req.body);
//     const { id, name, quantity } = req.body;

//     const params = {
//         TableName: tableName,
//         Item: {
//             id,
//             name,
//             quantity,
//         },
//     };

//     docClient.put(params, (error, data) => {
//         if (error) {
//             res.status(500).json({ error });
//         } else {
//             res.status(200).json({ data });
//         }
//     });
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});