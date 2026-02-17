// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { v4 as uuidv4 } from "uuid";
import { readData } from "../utils/fileHandler.js";
// import {path} from "path"
// import path from "node:path";
// import { readFile } from 'fs/promises';
// const path = require('path');
// 
const filePath = "./src/data/users.json";

export const getAllUsers = async (req, res) => {
//   console.log(path.join(__dirname, 'data', 'users.json'));
//    const jsonString = await readFile('./src/data/users.json', 'utf8');
//    console.log(jsonString);
  res.json(readData(filePath));
};