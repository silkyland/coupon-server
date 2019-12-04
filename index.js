import express from "express";
import { User } from "./connection";
import cors from "cors";
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("ยินดีต้อนรับสู่เว็บบุญชุม ขี้เหล้าหลวง");
});

app.get("/addUser", async (req, res) => {
  await User.create({ name: "xxxxx Doe", age: 30 });
  res.send("success");
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/add", async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  const user = await User.create({ name: name, age: age });
  res.json(user);
});

app.listen(3001, () => {
  console.log("เซิร์ฟเวอร์ของคุณกำลังรันที่พอร์ท 3000");
});
