import { NextResponse } from "next/server";
import ResponseNormalize from "@/utils/responseNormalize";
import { verifyToken } from "@/utils/verifyToken";

export async function GET(request: Request) {
    const headers: Headers = request.headers
    const token = headers.get('Authorization')
    if (token) {
        try {
            const { username, password } = await verifyToken<{ username: string, password: string }>(token)
            return NextResponse.json(ResponseNormalize.status(200).json({
                name: username,
                avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
                roles: ['admin']
            }))
        } catch (e) {
            return NextResponse.json(ResponseNormalize.status(500).msg('invalid token'))
        }
    } else {
        return NextResponse.json(ResponseNormalize.status(500).msg('token required in request header'))
    }
}
