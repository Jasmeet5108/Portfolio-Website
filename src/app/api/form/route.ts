import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json({ msg: "working on /form" })
}

export function POST(request: NextRequest) {

}