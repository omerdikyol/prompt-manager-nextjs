import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: [true, "Email is already registered"],
        trim: true,
        lowercase: true,
    },
    username: {
        type: String,
        required: [true, "Please enter your username"],
        unique: [true, "Username is already registered"],
        match: [/^[a-zA-Z0-9]+$/, "Username is invalid"],
        trim: true,
        lowercase: true,
    },
    image: {
        type: String,
    },
});

const User = models.User || model("User", userSchema);

export default User  // if model exists use it else create a new model