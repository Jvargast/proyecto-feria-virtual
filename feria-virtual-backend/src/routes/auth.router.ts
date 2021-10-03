import { Router } from "express";
import authController from "../controllers/auth.controller";

const router: Router = Router();

router.post('/signIn', authController.signIn);
router.post('/signUp', authController.signUp);
//router.post("/reset-password", authController.forgotPassword);

export default router;