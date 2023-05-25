import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";
import ResponseNormalize from "@/lib/responseNormalize";

export async function middleware(request: NextRequest) {
    const tokenStr = request.headers.get('Authorization')
    if (tokenStr) {
        const parts = tokenStr.split(' ')
        if (parts.length === 2) {
            const [scheme, token] = parts
            if (/^Bearer$/i.test(scheme)) {
                try {
                    await verifyAuth(token)
                } catch (e: any) {
                    return NextResponse.json(ResponseNormalize.status(401).msg(e.message))
                }
            }
        }
    } else {
        return NextResponse.json(ResponseNormalize.status(500).msg('Missing user token'))
    }
}

export const config = {
    matcher: '/api/user/userInfo/:path'
}
