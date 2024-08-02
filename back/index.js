import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import router from "./routes/router.js";

connectDB();

const app = express();

app.use(cors());

app.use("/api/auth", router);

const PORT = 4000;

app.get("/somepath", (req, res) => {
  res.json({
    exapmle: "Hello world!",
  });
});

app.post("/auth", (req, res) => {});

app.listen(PORT, () => {
  console.log(`server runs on port ${PORT}`);
});
