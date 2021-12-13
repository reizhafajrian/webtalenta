import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let UserSchema = null;
try {
  UserSchema = mongoose.model("User", user);
} catch (e) {
  UserSchema = mongoose.model("User");
}

export default UserSchema;
