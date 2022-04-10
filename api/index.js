require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

require("./config/database").connect();
app.use("/api/user", require("./routes/user.route"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
