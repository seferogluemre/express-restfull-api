import { Router } from "express";
import { getUsers } from "../controllers/userController";

const router = Router();

router.get("/users", getUsers);

export default router;
