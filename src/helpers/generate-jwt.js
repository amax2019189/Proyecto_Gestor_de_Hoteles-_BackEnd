import jwt from 'jsonwebtoken';

export const generarJWT = (uid = " ") => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(
            payload,
            process.env.TOKEN_KEY,
            {
                expiresIn: '720h'
            },
            (err, token) => {
                err ? (console.log(err),reject('Token could not be generated')) : resolve(token); 
            }
        )
    });
}