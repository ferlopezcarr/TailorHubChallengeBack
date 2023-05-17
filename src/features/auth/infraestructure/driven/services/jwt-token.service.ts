import jwt from 'jsonwebtoken';

export const getJwtToken = () => {
    jwt.sign({ _id: foundUser._id?.toString(), name: foundUser.name }, SECRET_KEY, {
        expiresIn: '2 days',
      });
}

export const verify = (token: string) => {
    return jwt.verify(token);
}

