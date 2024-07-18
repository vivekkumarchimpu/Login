import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        pimage: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)
export const User = mongoose.model("User", userSchema)