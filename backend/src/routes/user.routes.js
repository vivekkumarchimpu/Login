import { Router } from "express"
import { signUpUser } from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middleware.js"

const router = Router()
router.route("/registration").post(
    upload.fields([
        {
            name: "pimage",
            maxCount: 1
        },
    ]),
    signUpUser)

export default router;