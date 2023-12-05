import React from "react";
import { Button } from "../ui/button";
import { ArrowRightSquare } from "lucide-react";
import Image from "next/image";
import bgImg from "@/assets/bgImg.jpeg";

export default function Hero() {
  return (
    <main className="relative flex items-center justify-center min-h-[600px]">
      <div className="flex flex-col gap-7 items-center justify-center ">
        <h1 className=" text-[40px] text-white text-center font-bold">
          Welcome to my Blog Site
        </h1>
        <Button>
          <ArrowRightSquare className="mr-2 h-4 w-4" /> Learn More
        </Button>
      </div>
      <Image
        className=" opacity-60 absolute w-full h-[600px] z-[-1]"
        src={bgImg}
        alt="Bg"
      />
    </main>
  );
}
