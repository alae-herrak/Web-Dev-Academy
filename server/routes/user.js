import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUserByUsername,
  getUsers,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.patch("/:userId", updateUser);
router.delete("/:userId", deleteUser);
router.get("/:userId", getUserById);
router.get("/username/:username", getUserByUsername);

export default router;