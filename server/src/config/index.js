const dotenv = require("dotenv");
dotenv.config();

const config = {
    PORT: process.env.PORT,
    ACCESSKEYID: process.env.ACCESSKEYID,
    SECRETACCESSKEY: process.env.SECRETACCESSKEY,
    REGION: process.env.REGION,
};

module.exports = config;