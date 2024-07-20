import React from "react";
import { BackgroundBeams } from "@/components/background-beams";
import { FlipWords } from "@/components/flip-words";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import { motion } from "framer-motion";

const Header: React.FC = (): JSX.Element => {
  const words: string[] = [
    "Web Developer",
    "Backend Developer",
    "System Analyst",
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
          Hello i{"'"}m ✨
        </motion.p>
        <motion.h1
          initial={{ y: -30, scale: 0.9, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
          className="my-2 text-6xl lg:text-9xl font-extrabold font-Anton tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          M. <span className="text-red-600">AJI</span> PERDANA
        </motion.h1>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
          className="text-2xl lg:text-6xl font-bold font-Grape_Nuts hidden lg:block"
        >
          I{"'"}m a <FlipWords {...{ words }} />
        </motion.div>
        <motion.p
          initial={{ y: -1, opacity: 0, scale: 0.3 }}
          animate={{ y: 0, opacity: 1, scale: [0.1, 1] }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "backOut",
          }}
          className="lg:w-[67%] text-gray-400 text-sm lg:text-lg font-mono"
        >
          Work hard and stay curious. Here, we{"'"}re not just{" "}
          <span className="text-green-500 font-bold text-lg lg:text-xl">
            coding
          </span>
          ; we
          {"'"}re creating possibilities and shaping tomorrow. Every line of
          code is a step towards a better,{" "}
          <span className="text-green-500 font-bold text-lg lg:text-xl">
            smarter
          </span>
          , and more connected world. Remember, you
          {"'"}re not just a{" "}
          <span className="text-green-500 font-bold text-lg lg:text-xl">
            developer
          </span>
          ; you{"'"}
          re a{" "}
          <span className="text-green-500 font-bold text-lg lg:text-2xl">
            visionary
          </span>
          , a{" "}
          <span className="text-green-500 font-bold text-lg lg:text-3xl">
            creator
          </span>{" "}
          and a{" "}
          <span className="text-green-500 font-bold text-lg lg:text-4xl">
            changemaker
          </span>
          .
        </motion.p>
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
