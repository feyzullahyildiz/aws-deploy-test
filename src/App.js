const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.json({
    success: true,
    date: new Date(),
    port,
  });
});

app.listen(port, () => {
  console.log(`SERVER STARTED AT: ${port}`);
});
