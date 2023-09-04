const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let dataArray = [];

app.get("/:pathParam", (req, res) => {
  const pathParam = req.params.pathParam;
  const queryParam = req.query;

  const result = {
    pathParam: pathParam,
    queryParam: queryParam,
    info: "This is a JSON response with path and query parameters.",
  };

  res.json(result);
  dataArray.push(result);
});

app.post("/", (req, res) => {
  res.send(dataArray);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
