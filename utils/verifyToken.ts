import jwt from "jsonwebtoken";

export function verifyToken<T>(token: string, secret: string = 'secret'): Promise<T> {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(err)
            } else {
                resolve(decoded as T)
            }
        })
    })
}