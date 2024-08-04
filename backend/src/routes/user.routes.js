import { Router } from "express"
import { signInUser, signUpUser } from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()
router.route("/registration").post(
    upload.fields([
        {
            name: "pimage",
            maxCount: 1
        },
    ]),
    signUpUser)

router.route("/login").post(signInUser)
export default router;