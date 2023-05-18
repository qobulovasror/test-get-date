const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is home route /date /time").status(200);
});

app.get("/date", (req, res) => {
  let date = new Date();
  let respons =
    date.getDate() +
    "/" +
    date.getMonth() +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    "/" +
    date.getMinutes() +
    "/" +
    date.getSeconds();
  res.send(respons).status(200);
});

app.get("/get-ip", (req, res) => {
  res.send(req.ip).status(200);
});

const PORT = process.PORT || 5500;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
