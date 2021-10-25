const express = require("express"); //import express

const app = express();

app.use(() => {
  console.log("hello celpel");
  console.log("halo lagi");
});

app.listen(4000);
