import { NextRequest, NextResponse } from 'next/server';
import cookie from 'cookie';
export function middleware(request) {
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const token = cookies.token;
    // console.log('Parsed cookies:', token); // Debugging output
    if (token && !request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }
    if (!token && !request.nextUrl.pathname.startsWith('/admin/login')) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    return NextResponse.next();
}
export const config = {
    matcher: ['/admin/:path*',"/admin/login",],
};
