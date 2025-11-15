import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Allow static files, public files, and Clerk auth pages
    "/((?!_next|.*\\..*|sign-in|sign-up|sso-callback).*)",
  ],
};
