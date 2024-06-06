import mongoose, { Schema, Model, model } from 'mongoose';

interface IUser {
    name: string;
    email: string;
    message: string;
}

const userSchema: Schema<IUser> = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        message: { type: String, required: true },
    },
    { timestamps: true }
);

const User: Model<IUser> = mongoose.models.User || model<IUser>('users', userSchema);

export default User;