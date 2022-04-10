require("dotenv").config();
const express = require("express");
const port = 3000;

const app = express();
app.use(express.json());

require("./config/database").connect();
app.use("/api/user", require("./routes/user.route"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
