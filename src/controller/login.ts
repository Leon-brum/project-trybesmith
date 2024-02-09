import { Request, Response } from 'express';
import loginService from '../service/login';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  const response = await loginService.loginCheck({ username, password });

  if (response.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(response.status)).json(response.data);
  }
  return res.status(200).json(response.data);
}

export default {
  login,
};