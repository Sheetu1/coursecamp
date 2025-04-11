import mongoose from "mongoose";
import config from "../config/config.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "FirstName is required"],
  },

  lastName: {
    type: String,
    required: [true, "LastName is required"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },

  profilePic: {
    type: String,
    required: [true, "ProfilePic is required"],
  },

  bio: {
    type: String,
  },

  role: {
    type: String,
    enum: ["student", "instructor", "admin"],
    default: "student",
  },
});

userSchema.statics.hashPassword = async function(password) {
  return await bcrypt.hash(password, 10);
};


userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
      role: this.role
    },
    config.SECRET_KEY,
    { expiresIn: '1d' }
  );
};

userSchema.statics.comparePassword = async function(inputPassword, hashedPassword) {
  return await bcrypt.compare(inputPassword, hashedPassword);
};


export default mongoose.model("User", userSchema);
