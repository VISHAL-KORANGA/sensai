
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, GraduationCap, PenBox } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import { ChevronDown, LayoutDashboard, StarsIcon } from "lucide-react";

export default function Header() {
  return (
    <header
      className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50
      supports-[backdrop-filter]:bg-background/60 border-none"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="sensai logo"
            width={200}
            height={60}
          />
        </Link>

        {/* Dashboard Button */}
        <div className="flex items-center space-x-2 md:space-x-4 ml-220">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                className="border border-gray-700 transition-all duration-200
                hover:bg-gray-900 hover:text-white hover:shadow-md hover:-translate-y-[2px]"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Industry insights</span>
              </Button>
            </Link>
          </SignedIn>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">

          {/* Growth Tools - only when signed in */}
          <SignedIn>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="bg-white text-black transition-all duration-200 
                  hover:bg-gray-100 hover:shadow-md hover:-translate-y-[2px]"
                >
                  <StarsIcon className="h-4 w-4 text-black" />
                  <span className="hidden md:block text-black">Growth Tools</span>
                  <ChevronDown className="h-4 w-4 text-black" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Build Resume
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href="/ai-cover-letter" className="flex items-center gap-2">
                    <PenBox className="h-4 w-4" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href="/interviewpage" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          {/* Sign In button when logged out */}
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          {/* User Avatar after sign-in */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>

        </div>
      </nav>
    </header>
  );
}
