import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { BackgroundBeams } from "@/components/background-beams";
import { FlipWords } from "@/components/flip-words";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import Image from "next/image";
import React from "react";

const Header: React.FC = (): JSX.Element => {
  const words: string[] = [
    "Web Developer",
    "Backend Developer",
    "PhotoGrapher",
  ];

  return (
    <header className="container p-4 lg:p-0 antialiased w-full h-screen flex flex-col lg:flex-row lg:justify-around items-center">
      <div className="z-20 lg:w-full h-[32rem] lg:h-full">
        <CardContainer className="inter-var w-96">
          <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] hover:border hover:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-2xl font-bold w-full text-center"
            >
              M. Aji Perdana S.Kom
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-sm font-light mt-2 w-full text-center"
            >
              Web Developer, Backend Developer, PhotoGrapher
            </CardItem>
            <CardItem
              translateZ="100"
              className="w-full mt-4 flex justify-center"
            >
              <Image
                src="/images/avatar.jpg"
                height="1000"
                width="1000"
                className="h-72 w-72 object-cover rounded-full group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
      <div className="lg:w-full z-10 text-center lg:text-left">
        <p className="text-lg">Hello i{"'"}m</p>
        <h1 className="text-4xl lg:text-6xl font-extrabold">M. Aji Perdana</h1>
        <p className="font-bold text-xl lg:text-3xl my-4">
          I{"'"}m a <FlipWords {...{ words }} />
        </p>
        <div className="flex justify-center lg:justify-start mb-10">
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
