const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is home route /date /time").status(200);
});

app.get("/date", (req, res) => {
  const date = new Date().toLocaleDateString();
  res.send(date).status(200);
});

const PORT = process.PORT || 5500;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
