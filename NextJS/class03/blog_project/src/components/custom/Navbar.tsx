import logo from "@/assets/logo.png";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center bg-white min-h-[64px]">
      <div className="grid w-4/5 h-full grid-cols-[10%_80%_10%] items-center">
        {/* Logo */}
        <div>
          <Image src={logo} alt="logo" className="w-20 h-20 rounded-full" />
        </div>
        {/* Menu */}
        <div className="hidden sm:block">
          <Menu />
        </div>
        {/* Avatar */}
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
