const express = require("express");

const router = require("./Routes/index");
const dotenv = require("dotenv");
dotenv.config({ path: "./port.env" });
const port = process.env.PORT;
// const api = process.env.api;

const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log("app is in port", port);
  // console.log(api);
});
