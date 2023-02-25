import { createServer } from "http";
const apidata = require("./data.json");

createServer((req, res) => {
  res.write("Hello World!");
  res.send(apidata);
  res.end();
}).listen(process.env.PORT);
