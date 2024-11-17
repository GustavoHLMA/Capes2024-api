import { Response } from 'express';

class CookieRepository {
  setCookie(res: Response, tokenName: string, token: string) {
    res.cookie(tokenName, token, {
      httpOnly: true,
      path: '/auth',
      secure: true,
    });
  }

  clearCookies(res: Response, tokenName: string) {
    res.cookie(tokenName, '', {
      httpOnly: true,
      path: '/auth',
      secure: true,
      maxAge: 0,
    });
  }
}

export default new CookieRepository();