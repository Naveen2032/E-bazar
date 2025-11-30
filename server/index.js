const express = require("express");
const connectToMongoDb = require("./db");
const cors = require("cors");
connectToMongoDb();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 7000;

// app.use("/product", require("./routes/routes"));
app.use("/user", require("./routes/user-routes"));
app.use("/uploads/product", express.static("./uploads"));

app.listen(PORT, (req, res) => {
  console.log("Server is listening on port " + PORT);
});
