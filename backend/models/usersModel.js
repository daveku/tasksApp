const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: [true, "Nombre requerido"],
    },
    email: {
      type: "string",
      required: [true, "Email requerido"],
      unique: true,
    },
    password: {
      type: "string",
      required: [true, "Contraseña requerida"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
