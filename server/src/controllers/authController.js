import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, passwordHash });

    res.json({
      message: "User Registered",
      token: generateToken(user._id),
      user,
    });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

    res.json({
      message: "Login successful",
      token: generateToken(user._id),
      user,
    });
  } catch (error) {
    res.status(400).json({ message: "Login failed", error });
  }
};
