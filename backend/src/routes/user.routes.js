import { Router } from "express"
import { signUpUser } from "../controllers/user.controller.js"

const router = Router()
router.route("/registration").post(signUpUser)

export default router;