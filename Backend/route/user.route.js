import express from "express";
import { signup, login } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", (req, res) => {
    // Optional: If you maintain a token blacklist, add token invalidation logic here
    res.status(200).json({ message: "Logout successful" });
});
export default router;