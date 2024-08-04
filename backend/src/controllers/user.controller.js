import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { uploadOnCloudinay } from "../utils/cloudinary.js"

import {User} from "../models/user.models.js"

import jwt from "jsonwebtoken"

const generateAccessAndRefereshTokens = async (userId) => {
    try{
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken, refreshToken}
    } catch(error) {
        throw new ApiError(500, "Something went word while generating refresh Token and Access Token")
    }
}

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

    //console.log(req.files);

    
    const avatarLocalPath = req.files?.pimage[0]?.path;
    
    if(!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinay(avatarLocalPath)

    if(!avatar) {
        throw new ApiError(400, "Avatar file is required !")
    }

    
    // Create User Object - Create entry in db
    const user = await User.create({
        username,
        phone,
        email,
        password,
        pimage: avatar.url,
    })
    const createUser = await User.findById(user._id).select("-password")
    if(!createUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res
    .status(201)
    .json(new ApiResponse(200, createUser, "User registered Successfully"))
})

const signInUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body
    
    if(!email && !password){
        throw new ApiError(400, "Email id or Passeord is required")
    }

    const user = await User.findOne({
        $or : [{ email }, { password }]
    })
    if(!user){
        throw new ApiError(404, "User Doees not Exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)
    
    if(!isPasswordValid){
        throw new ApiError(401, "Invalid user credentials")
    }
    
    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id)
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    {
                        user: loggedInUser, accessToken, refreshToken
                    },
                    "User logged In SuccessFully"
                )
            )
})
export {
    signUpUser,
    generateAccessAndRefereshTokens,
    signInUser
    
}