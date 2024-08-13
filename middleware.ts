import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'es', 'fr', 'pt'],

    defaultLocale: 'en'
});

export const config = {
    matcher: ['/', '/(es|en|fr|pt)/:path*']
};