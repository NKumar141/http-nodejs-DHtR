import { createServer } from "http";
const apidata = require("./data.json");

createServer((req, res) => {
  res.write(apidata);
  //res.send(apidata);
  res.end();
}).listen(process.env.PORT);
