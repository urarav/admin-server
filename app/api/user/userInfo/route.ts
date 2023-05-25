import { NextRequest, NextResponse } from "next/server";
import ResponseNormalize from "@/lib/responseNormalize";

export async function GET(request: NextRequest) {
    const { value: username } = request.cookies.get('username')!
    return NextResponse.json(ResponseNormalize.status(200).json({
        name: username,
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        roles: ['admin']
    }))
}
