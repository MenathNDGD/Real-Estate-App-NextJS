import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white flex">
      <div className="hidden lg:block fixed left-0 top-0 h-full w-1/2">
        <Image
          src={"/signup_bg.jpg"}
          layout="fill"
          objectFit="cover"
          alt="SignIn"
        />
      </div>

      <div className="fixed right-0 top-0 h-full w-full lg:w-1/2 flex justify-center items-center">
        <SignUp />
      </div>
    </div>
  );
}
