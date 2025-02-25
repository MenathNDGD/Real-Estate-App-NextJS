"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { UserButton, useUser } from "@clerk/nextjs";
import { LogIn, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

const Header = () => {
  const pathname = usePathname();
  const { user, isSignedIn } = useUser();

  useEffect(() => {}, []);

  return (
    <div className="flex justify-between p-6 px-10 shadow-sm fixed top-0 w-full z-10 bg-white">
      <div className="flex gap-12 items-center font-semibold">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src={"/logo.png"}
            width={150}
            height={150}
            alt="Logo"
            className="object-contain"
          />
        </Link>
        <ul className="hidden md:flex gap-10 cursor-pointer">
          <li
            className={`hover:text-primary ${
              pathname === "/" && "text-primary font-extrabold"
            }`}
          >
            Buy Property
          </li>
          <li className={`hover:text-primary`}>Rent a Home</li>
          <li className={`hover:text-primary`}>Find an Agent</li>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <Button className="flex gap-2">
          <Plus className="h-8 w-8" />
          Add Property
        </Button>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href={"/sign-in"}>
            <Button className="flex gap-2" variant="outline">
              <LogIn className="h-8 w-8" />
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
