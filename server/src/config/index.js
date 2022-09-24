const dotenv = require("dotenv");
dotenv.config();

const config = {
    ACCESSKEYID: process.env.ACCESSKEYID,
    SECRETACCESSKEY: process.env.SECRETACCESSKEY,
    REGION: process.env.REGION,
};

module.exports = config;