const config = require("./index");
const AWS = require("aws-sdk");

const configAWS = new AWS.Config({
    accessKeyId: config.ACCESSKEYID,
    secretAccessKey: config.SECRETACCESSKEY,
    region: config.REGION,
});

AWS.config = configAWS;

const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = docClient;