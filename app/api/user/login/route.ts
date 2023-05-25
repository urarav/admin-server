import { NextResponse } from "next/server";
import ResponseNormalize from "@/lib/responseNormalize";
import { generateToken } from "@/lib/auth";

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const token = await generateToken(body)
        return new Response(ResponseNormalize.status(200).json({ token }).stringify(), {
            status: 200,
            headers: {
                'Set-Cookie': `username=${encodeURIComponent(body.username)}`
            }
        })
    } catch (e: any) {
        return NextResponse.json(ResponseNormalize.status(500).msg(e.message))
    }
}
