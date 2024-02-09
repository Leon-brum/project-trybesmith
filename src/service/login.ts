import bcrypt from 'bcryptjs';
import authFunctionJWT from '../utils/authFunctionJWT';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';

type Token = { token: string };
type Login = {
  username: string;
  password: string;
};

async function loginCheck(credentials: Login): Promise<ServiceResponse<Token>> {
  if (!credentials.username || !credentials.password) {
    return {
      status: 'INVALID_DATA',
      data: { message: '"username" and "password" are required' },
    };
  }
  const user = await UserModel.findOne({ where: { username: credentials.username } });
  if (!user || !bcrypt.compareSync(credentials.password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id, username } = user.dataValues;

  const token = authFunctionJWT.createToken({ id, username });

  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  loginCheck,
};