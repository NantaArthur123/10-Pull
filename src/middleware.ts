import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';
import { updateSession } from './lib/database/middleware';

// Intl routing for localisation
const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const response = await updateSession(request);
  

  return (intlMiddleware as any)(request, response)
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
};