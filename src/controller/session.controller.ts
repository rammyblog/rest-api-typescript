import { Request, Response } from 'express';
import config from 'config';
import {
  createSession,
  findSessions,
  updateSession,
} from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt } from '../utils/jwt.utils';

export async function createUserSessionHandler(req: Request, res: Response) {
  const user:any = await validatePassword(req.body);

  if (!user) {
    res.status(401).send('Invalid email or password');
  }

  const session = await createSession(user._id, req.get('user-agent') || '');
  const accessToken = signJwt(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get<string>('accessTokenTtl') }
  );

  const refreshToken = signJwt(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get<string>('refreshTokenTtl') }
  );

  return res.send({ accessToken, refreshToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  const sessions = await findSessions({ user: userId, valid: true });
  return res.send(sessions);
}

export async function deleteSessionsHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session;
  await updateSession({ _id: sessionId }, { valid: false });
  return res.sendStatus(200);
}
