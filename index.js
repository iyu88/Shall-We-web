const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5055;
// const userRoute = require("./routes/user");
// const authRoute = require("./routes/auth");
// const contestRoute = require("./routes/contest");

dotenv.config();

let corsOption = {
  origin: PORT, // 허락하는 요청 주소
  credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"));

app.use(express.json());
app.use(cors(corsOption));
app.use(express.static(path.join(__dirname, "/client/build")));

/*
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "front/build/index.html"));
});

// app.use("/api/user", userRoute);
// app.use("/api/auth", authRoute);
// app.use("/api/contest", contestRoute);
*/
// React Router 오류 방지
app.get("*", (req, res) => {
  console.log("404 Not Found");
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

app.listen(PORT, () => {
  console.log("Server is running.");
});
