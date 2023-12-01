import React from "react";
import Image from "next/image";
import { ArrowRightSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgImg from "@/assets/bgimg.jpg";

function Hero() {
  return (
    <main className="relative flex items-center justify-center min-h-[60px]">
      <div className="flex flex-col items-center justify-center gap-7">
        <h1 className="font-bold text-white text-[40px] text-center">
          Welcome to my blog
        </h1>
        <Button>
          <ArrowRightSquare className="w-4 h-4 mr-2" /> Learn More
        </Button>
      </div>
      <Image
        src={bgImg}
        className="opacity-60 absolute w-full h-[600px] z-[-1]"
        alt="backgroundImage"
      />
    </main>
  );
}

export default Hero;
