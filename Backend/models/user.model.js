const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      firstname: {
        type: String,
        required: true,
        minlength: [2, "First name must be at least 3 characters long"],
      },
      lastname: {
        type: String,
        minlength: [2, "Last name must be at least 3 characters long"],
      },
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters long"],
    },
    avatar: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: [5, "Email must be at least 5 characters long"],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    interests: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

// 🔐 Static method to hash password
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

// 🔑 Method to generate JWT token
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

// 🔍 Method to compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
