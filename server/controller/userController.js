import User from "../models/userModel.js";

// route POST /api/users/auth
// @desc token avj nevtren
// Uureg PUBLIC
export const authUser = async (req, res) => {
  await res.status(200).json({ message: "Auth User" });
};
// route POST /api/users
// @desc shine hereglegch
// Uureg PUBLIC
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  }
};
// route POST /api/users/logout
// @desc logout hiij garah
// Uureg PUBLIC
export const logoutUser = async (req, res) => {
  await res.status(200).json({ message: "Logout User" });
};
// route GET /api/users/profile
// @desc hereglegchiin medeeleliig haruulah
// Uureg PRIVATE
export const getUserProfile = async (req, res) => {
  await res.status(200).json({ message: "Profile User" });
};
// route PUT /api/users/profile
// @desc hereglegchiin medeeleliig shinchleh
// Uureg PRIVATE
export const updateUserProfile = async (req, res) => {
  await res.status(200).json({ message: "Update Profile User" });
};
