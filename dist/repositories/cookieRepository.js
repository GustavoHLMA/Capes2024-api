"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CookieRepository {
    setCookie(res, tokenName, token) {
        res.cookie(tokenName, token, {
            httpOnly: true,
            path: '/auth',
            secure: true,
        });
    }
    clearCookies(res, tokenName) {
        res.cookie(tokenName, '', {
            httpOnly: true,
            path: '/auth',
            secure: true,
            maxAge: 0,
        });
    }
}
exports.default = new CookieRepository();
