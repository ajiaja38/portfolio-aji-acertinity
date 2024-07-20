import React from "react";
import { BackgroundBeams } from "@/components/background-beams";
import { FlipWords } from "@/components/flip-words";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import { motion } from "framer-motion";

const Header: React.FC = (): JSX.Element => {
  const words: string[] = [
    "Web Developer",
    "Backend Developer",
    "Photographer",
  ];

  return (
    <header className="container p-4 lg:p-0 antialiased w-full h-screen flex justify-center items-center">
      <div className="w-full z-10 text-center flex flex-col justify-center items-center gap-y-3">
        <motion.p
          initial={{ y: -100, opacity: 0, scale: 0.3 }}
          animate={{ y: 0, opacity: 1, scale: [0.1, 1] }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "backOut",
          }}
          className="text-lg lg:text-4xl mb-2 text-gray-200 font-Playwrite"
        >
          ✨ Hello i{"'"}m
        </motion.p>
        <motion.h1
          initial={{ y: -30, scale: 0.9, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
          className="text-5xl lg:text-9xl font-extrabold font-Anton my-2 tracking-wider"
        >
          M. <span className="text-red-500">AJI</span> PERDANA
        </motion.h1>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
          className="text-2xl lg:text-6xl font-bold font-Grape_Nuts"
        >
          I{"'"}m a <FlipWords {...{ words }} />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "backOut",
          }}
          whileHover={{ scale: 1.2 }}
          className="flex justify-center mb-10 mt-4 w-fit"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-gray-950 flex items-center space-x-2"
          >
            <span>Contact Me</span>
          </HoverBorderGradient>
        </motion.div>
      </div>
      <BackgroundBeams />
    </header>
  );
};

export default Header;
