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
const tableName = "products";

const getAll = (req, res, next) => {
    const params = {
        TableName: tableName,
    };

    docClient.scan(params, (error, data) => {
        if (error) {
            return res.status(500).json({ error });
        } else {
            return res.status(200).json({ data });
        }
    });
};
const getItem = (req, res, next) => {
    const params = {
        TableName: tableName,
        Key: {
            id: req.params.id,
        },
    };

    docClient.get(params, (error, data) => {
        if (error) {
            return res.status(500).json({ error });
        } else {
            return res.status(200).json({ data });
        }
    });
};
const save = (req, res, next) => {
    console.log(req.body);
    const { id, name, quantity, price } = req.body;

    const params = {
        TableName: tableName,
        Item: {
            id,
            name,
            quantity,
            price,
        },
    };

    docClient.put(params, (error, data) => {
        if (error) {
            return res.status(500).json({ error });
        } else {
            return res.status(200).json({
                message: "Insert success",
                data: params.Item,
            });
        }
    });
};

const remove = (req, res, next) => {
    const { id } = req.params;
    const params = {
        TableName: tableName,
        Key: { id },
    };

    console.log({
        a: config.ACCESSKEYID,
        b: config.SECRETACCESSKEY,
        c: config.REGION,
    });

    console.log({ params });

    docClient.delete(params, (error, data) => {
        if (error) {
            return res.status(500).json({ error });
        } else {
            return res.status(200).json({ data });
        }
    });
};

module.exports = { getAll, getItem, save, remove };
