const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const PORT = process.env.PORT || 5055;
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const contestRoute = require("./routes/contest");
const teammateRoute = require("./routes/teammate");
const reviewRoute = require("./routes/review");
const accountRoute = require("./routes/account");

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
app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("파일 업로드");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/contest", contestRoute);
app.use("/api/teammate", teammateRoute);
app.use("/api/review", reviewRoute);
app.use("/api/account", accountRoute);

// React Router 오류 방지
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is running.");
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }
