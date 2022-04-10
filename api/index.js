require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

require("./config/database").connect();
app.use("/api/user", require("./routes/user.route"));
app.use("/api/project", require("./routes/project.route"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
