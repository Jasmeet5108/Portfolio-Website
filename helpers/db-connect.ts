import mongoose from "mongoose";

export const connectToDB = async (url: any) => {
    try {
        await mongoose.connect(url).then(() => console.log("Connected to database")).catch(() => console.log("failed to connect"))
    } catch (error) {
        console.log(error);
    }
}