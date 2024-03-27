import Express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../Controllers/AuthController.js";
import { isAdmin, requireSignIn } from "../Middleware/AuthMiddleware.js";

const router = Express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/test", requireSignIn, isAdmin, testController);
router.get("/user-auth", requireSignIn, (req, res) => {
  res.send({
    ok: true,
  });
});

export default router;
