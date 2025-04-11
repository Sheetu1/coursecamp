import app from "./src/app.js"
import dotenv from "dotenv";
import config from "./src/config/config.js";
import connectDB from "./src/db/db.js";

dotenv.config();

connectDB();

app.listen(config.PORT, () => {
  console.log(`Server is running on ${config.PORT} port`);
});

