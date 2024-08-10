import express from "express";
import  { router as index } from "./index.js";


export const app = express();
// app.use("/", (req, res) => {
//   res.send("Hello World!!!");
// });

app.use("/", index);
