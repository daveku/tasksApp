const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const users = require("../models/usersModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Faltan datos");
  }

  const userExist = await users.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("Email ya registrado");
  }

  // hash password
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await users.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("datos no validos");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Faltan datos");
  }

  const userExist = await users.findOne({ email });
  if (!userExist) {
    res.status(400);
    throw new Error("usuario no existe");
  }

  if (await bcrypt.compare(password, userExist.password)) {
    res.status(200).json({
      id: userExist.id,
      name: userExist.name,
      email: userExist.email,
    });
  } else {
    res.status(400);
    throw new Error("Credenciales incorrectas.");
  }
});

const profileUser = asyncHandler(async (req, res) => {});

module.exports = {
  registerUser,
  loginUser,
  profileUser,
};
