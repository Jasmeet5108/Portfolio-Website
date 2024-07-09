import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "../../../../helpers/db-connect";
import User from "../../../../models/user-model";

connectToDB(process.env.MONGODB_URI)

export async function GET(request: NextRequest) {
    const allData = await User.find()
    return NextResponse.json({ msg: "working on /api/form", data: allData })
}

export async function POST(request: NextRequest) {
    const { name, email, message } = await request.json()
    const newUser = await User.create({ name, email, message })
    return NextResponse.json({ success: true, msg: "Message delivered", NewUser: newUser })
}