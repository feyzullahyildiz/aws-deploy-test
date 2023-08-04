const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    success: true,
    date: new Date(),
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`SERVER STARTED AT: ${port}`);
});
