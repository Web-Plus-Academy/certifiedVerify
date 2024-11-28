import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true
    },
    certificateLink: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('Certified', userSchema);

export default User
