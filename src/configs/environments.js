import dotenv from "dotenv";
dotenv.config();

const number = process.env.NUMBER;
const name = process.env.NAME;

export default { number, name };