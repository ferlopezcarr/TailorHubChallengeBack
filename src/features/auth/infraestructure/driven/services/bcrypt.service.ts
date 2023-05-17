import bcrypt from 'bcrypt';

const saltRounds = 8

export const createPasswordHash = (password: string): Promise<string> => {
    return bcrypt.hash(password, saltRounds);
}

export const checkPassword = (password: string, hashedPassword: string) => {
    return bcrypt.compareSync(password, hashedPassword);
}