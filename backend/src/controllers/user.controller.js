import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"

import {User} from "../models/user.models.js"


const signUpUser = asyncHandler(async(req, res) => {

    //get User Details From Frontend
    const { username, phone, email, password, pimage } = req.body


    //Here checking All the fields at a time
    if(
        [username, phone, email, password, pimage].some((field) => field?.trim() === "")
    ){
        throw new ApiError (400, "All fields are required")
    }

    //check if user already exists: username, email
    const existedUser = await User.findOne({
        $or : [{username}, {email}]
    })

    if(existedUser) {
        throw new ApiError(409, "User with email or username already exists ")
    }
    // Create User Object - Create entry in db
    const user = await User.create({
        username,
        phone,
        email,
        password,
        pimage
    })
    const createUser = await User.findById(user._id).select("-password")
    if(!createUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res
    .status(201)
    .json(new ApiResponse(200, createUser, "User registered Successfully"))
})
export {
    signUpUser
}