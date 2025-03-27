const app = require("./app");
const connectDB = require("./db/connection");
const https = require("https");
const fs = require("fs");

connectDB("dsc");

const options = {};
if (process.env.NODE_ENV === "production") {
  // do not remove these as they are used in the ec2 instance where backend is hosting
  options.key = fs.readFileSync("key.pem");
  options.cert = fs.readFileSync("cert.pem");
}

https.createServer(options, app).listen(443, () => {
  console.log(
    "Server running on https://ec2-18-136-203-105.ap-southeast-1.compute.amazonaws.com",
  );
});
