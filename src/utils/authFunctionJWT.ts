import jwt from 'jsonwebtoken';

type TokenPayload = {
  id: number;
  username: string;
};

const secret = process.env.JWT_SECRET || 'secret';

const createToken = (payload: TokenPayload): string => jwt.sign(payload, secret);
const getPayload = (token: string): TokenPayload => jwt.verify(token, secret) as TokenPayload;

export default {
  createToken,
  getPayload,
};