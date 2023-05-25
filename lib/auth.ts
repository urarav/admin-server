import { JWTPayload, jwtVerify, JWTVerifyResult, SignJWT } from "jose";
import { nanoid } from "nanoid";

export async function verifyAuth<T>(token: string): Promise<JWTPayload> {
    try {
        const { payload }: JWTVerifyResult = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY))
        return payload
    } catch (e) {
        throw new Error('Your token has expired.')
    }
}

export function generateToken(payload: JWTPayload): Promise<string> {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setJti(nanoid())
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(new TextEncoder().encode(process.env.JWT_SECRET_KEY))
}
