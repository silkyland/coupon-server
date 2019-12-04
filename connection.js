import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/coupon", { useNewUrlParser: true });

export const User = mongoose.model("User", { name: String, age: Number });
