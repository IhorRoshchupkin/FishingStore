const jwt = require("jsonwebtoken");
const userService = require("../services/userService");

// Регистрация
const register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const user = await userService.registerUser(
      email,
      password,
      firstName,
      lastName
    );

    // Генерация JWT токена
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userService.loginUser(email, password);

    // JWT token generation
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
};
