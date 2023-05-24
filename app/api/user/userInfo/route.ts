import { NextResponse } from "next/server";
import ResponseNormalize from "@/utils/responseNormalize";
import jwt from 'jsonwebtoken'

export async function GET(request: Request) {
    const headers: Headers = request.headers
    const token = headers.get('Admin-Token')
    if (token) {
        return NextResponse.json({
            test: 1
        })
    } else {
        return NextResponse.json(ResponseNormalize.status(500).msg('token error'))
    }
}
