import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import ResponseNormalize from "@/utils/responseNormalize";

export async function POST(request: Request) {
    const body: { username: string, password: string } = await request.json()
    const token = jwt.sign(body, 'secret', {
        expiresIn: 60 * 60
    })
    return NextResponse.json(ResponseNormalize.status(200).json({ token }))
}
