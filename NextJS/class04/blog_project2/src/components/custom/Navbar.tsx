import logo from "@/assets/logo.jpeg";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Menu from "./Menu";
function Navbar() {
  return (
    <nav className=" flex items-center justify-center bg-white min-h-[64px]">
      <div className=" grid grid-cols-[10%,80%,10%] items-center w-4/5 h-full">
        {/* Logo */}
        <div>
          <Image src={logo} className=" h-20 w-20 rounded-full" alt="Logo" />
        </div>
        {/* Menu */}
        <div className="hidden sm:flex">
          <Menu />
        </div>
        {/* Avatar */}
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
