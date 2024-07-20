import { CardBody, CardItem } from "@/components/3d-card";
import { BackgroundBeams } from "@/components/background-beams";
import { FlipWords } from "@/components/flip-words";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import Image from "next/image";
import React from "react";

const Header: React.FC = (): JSX.Element => {
  const words: string[] = ["Web", "Backend", "Photographer"];

  return (
    <header className="container p-4 lg:p-0 antialiased w-full h-screen flex justify-center items-center">
      <div className="w-full z-10 text-center flex flex-col gap-y-3 font-Playfair_Display">
        <p className="text-lg lg:text-5xl">✨ Hello i{"'"}m</p>
        <h1 className="text-4xl lg:text-9xl font-bold">
          M. <span className="text-yellow-400">AJI</span> PERDANA
        </h1>
        <div className="text-xl lg:text-5xl font-bold my-4">
          I{"'"}m a <FlipWords {...{ words }} />
        </div>
        <div className="flex justify-center mb-10 mt-4">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-gray-950 flex items-center space-x-2"
          >
            <span>Contact Me</span>
          </HoverBorderGradient>
        </div>
      </div>
      <BackgroundBeams />
    </header>
  );
};

export default Header;
