const mongoose = require("mongoose");
const url =
  "mongodb+srv://idrisolas:Kendrick12@cluster0.ustoh.mongodb.net/idris?";

mongoose
  .connect(url)
  .then(() => {
    console.log("you have successfully connected to database");
  })
  .catch(() => {
    console.log("cannot connect to database");
  });
