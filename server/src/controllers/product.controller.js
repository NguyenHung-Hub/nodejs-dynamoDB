const multer = require("multer");
const AWS = require("aws-sdk");
const config = require("../config");
const docClient = require("../config/dynamoDB");
const upload = multer();

// const configAWS = new AWS.Config({
//     accessKeyId: config.ACCESSKEYID,
//     secretAccessKey: config.SECRETACCESSKEY,
//     region: config.REGION,
// });

// AWS.config = configAWS;
// const docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "product";

const getAll = (req, res, next) => {
    const params = {
        TableName: tableName,
    };

    docClient.scan(params, (error, data) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(200).json({ data });
        }
    });
};
const save = (req, res, next) => {
    console.log(req.body);
    const { id, name, quantity } = req.body;

    const params = {
        TableName: tableName,
        Item: {
            id,
            name,
            quantity,
        },
    };

    docClient.put(params, (error, data) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(200).json({ data });
        }
    });
};

module.exports = { getAll, save };