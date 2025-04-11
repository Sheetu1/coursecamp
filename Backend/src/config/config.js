import dotenv from "dotenv";
dotenv.config();
const _config = {
    MONGO_URL: process.env.MONGO_URL,
    PORT: process.env.PORT,
    SECRET_KEY: process.env.SECRET_KEY
};
const config = Object.freeze(_config);
export default config;