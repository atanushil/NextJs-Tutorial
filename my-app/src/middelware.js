// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('Middleware is running for:', request.url);
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*', // Apply middleware to specific routes
};
