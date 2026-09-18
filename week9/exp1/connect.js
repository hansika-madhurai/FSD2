const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://tejaswini_db_user:YOUR_NEW_PASSWORD@cluster0.qvflrmx.mongodb.net/TejaswiniDB?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Tejaswini connected to MongoDB Atlas successfully!");
  })
  .catch((err) => {
    console.log("Tejaswini database connection error:", err);
  });