import pg from "pg";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../../.env") });

const db=new pg.Client({
     user:process.env.USER_NAME,
     host:process.env.HOST,
     database:process.env.DATABASE,
     password:process.env.PASSWORD,
     port:process.env.DB_PORT,
});

export default db;