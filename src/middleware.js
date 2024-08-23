import { NextRequest, NextResponse } from 'next/server';
import cookie from 'cookie';

export function middleware(request) {
    // Log the raw cookie string for debugging
    // console.log('Raw cookies:', request.headers.get('cookie'));

    // Parse the cookies
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const token = cookies.token;

    console.log('Parsed cookies:', token); // Debugging output

    if (token && !request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    if (!token && !request.nextUrl.pathname.startsWith('/account/login')) {
        return NextResponse.redirect(new URL('/account/login', request.url));
    }

    // Allow request to proceed if no redirects were triggered
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
