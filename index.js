import express from "express";
import { User } from "./connection";
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ยินดีต้อนรับสู่เว็บบุญชุม ขี้เหล้าหลวง");
});

app.get("/addUser", async (req, res) => {
  await User.create({ name: "xxxxx Doe", age: 30 });
  res.send("success");
});

app.get("/showUsers", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000, () => {
  console.log("เซิร์ฟเวอร์ของคุณกำลังรันที่พอร์ท 3000");
});
