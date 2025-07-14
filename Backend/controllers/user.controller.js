const User = require("../models/user.model");

// ✅ Register a user
module.exports.registerUser = async (req, res) => {
  try {
    const { firstname, lastname, username, email, password, avatar, interests } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ message: "User already exists" });

    const hashedPassword = await User.hashPassword(password);

    const newUser = await User.create({
      fullname: { firstname, lastname },
      username,
      email,
      password: hashedPassword,
      avatar,
      interests,
    });

    const token = newUser.generateAuthToken();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        email: newUser.email,
        avatar: newUser.avatar,
        interests: newUser.interests,
        token,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// ✅ Login a user
module.exports.loginUser = async (req, res) => {
  try {
    const { emailOrUsername, password } = req.body;

    const user = await User.findOne({
      $or: [
        { email: new RegExp(`^${emailOrUsername}$`, "i") },
        { username: new RegExp(`^${emailOrUsername}$`, "i") },
      ],
    }).select("+password");

    if (!user || !(await user.comparePassword(password)))
      return res.status(400).json({ message: "Invalid credentials" });

    const token = user.generateAuthToken();

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        interests: user.interests,
        token,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
