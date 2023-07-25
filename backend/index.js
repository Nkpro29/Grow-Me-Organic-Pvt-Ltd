const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const useRoute = require("./userController");

dotenv.config({ path: "./.env" });

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
  
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("error in connecting to MongoDB", error);
  });

app.use("/user", useRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port 3000`);
});
