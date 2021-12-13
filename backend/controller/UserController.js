import { check } from "express-validator";
import { encrypt, comparePassword } from "../middleware/encrypt";
import { generateToken } from "../middleware/jwt";
import {
  validationHandler,
  validations,
} from "../middleware/ValidationHandler";

const { default: UserSchema } = require("../models/user");

const UserController = {
  login: async (req, res) => {
    try {
      await validationHandler(
        req,
        res,
        validations([
          check("email", "Invalid email address").isEmail(),
          check("password", "Password at least 8 characters").isLength({
            min: 8,
          }),
        ])
      );
      const { email, password } = req.body;
      const user = await UserSchema.findOne(
        { email: email },
        { password: 0, __v: 0 }
      );
      if (!user) {
        return res.status(401).json({
          status: 401,
          message: "Invalid email or password",
        });
      }
      const isMatch = await comparePassword(password, user.password);
      if (isMatch) {
        const token = await generateToken(user);
        return res.status(200).json({
          status: 200,
          user: user,
          token: token,
        });
      }
      return res.status(400).json({
        status: 400,
        message: "Invalid email or password",
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  register: async (req, res) => {
    try {
      await validationHandler(
        req,
        res,
        validations([
          check("name", "Full name is required!").not().isEmpty(),
          check("email", "Invalid email address").isEmail(),
          check("password", "Password at least 8 characters")
            .isLength({
              min: 8,
            })
            .custom((value, { req }) => {
              if (value !== req.body.confirmPassword) {
                throw new Error("The password is not the same as the new one");
              } else {
                return value;
              }
            }),
        ])
      );
      const { name, email, password } = req.body;
      const passwordhash = await encrypt(password);
      const user = await UserSchema.create({
        name,
        email,
        password: passwordhash,
      });
      if (user)
        return res.status(201).json({
          message: "User created successfully",
          status: 201,
        });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
        status: 400,
      });
    }
  },
};
export default UserController;
