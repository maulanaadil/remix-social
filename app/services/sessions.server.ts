import { createCookieSessionStorage } from '@remix-run/node'; // or "@remix-run/cloudflare"

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: '__remix-social-session',

      // all of these are optional
      domain:
        process.env.NODE_ENV === 'production'
          ? 'https://remix-social-phi.vercel.app/'
          : undefined,
      // Expires can also be set (although maxAge overrides it when used in combination).
      // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
      //
      expires: new Date(Date.now() + 60_00000),
      httpOnly: true,
      maxAge: 60_00000,
      path: '/',
      sameSite: 'lax',
      secrets: ['s3cret1'],
      secure: process.env.NODE_ENV === 'production',
    },
  });

export { getSession, commitSession, destroySession };
