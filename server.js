const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const path = require("path");
const app = express();

// BodyParser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB config
const db = config.get("mongoURI");

// Connect to MongoDB

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://mohamed:admin123@cluster0.14bfp.mongodb.net/agenciesManager?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use(cors());

app.use("/api/agencies", require("./routes/api/agencies"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
