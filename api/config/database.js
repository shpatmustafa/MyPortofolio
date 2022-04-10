const mongoose = require("mongoose");

const db_string = process.env.DB_STRING;

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(db_string)
    .then(() => {
      console.log("Database connection is Ready");
    })
    .catch(() => {
      console.log(
        "A error has been occurred while" + " connecting to database."
      );
    });
};
