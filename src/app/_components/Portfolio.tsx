import React from "react";
import { LampContainer } from "@/components/lamp";
import { motion } from "framer-motion";

const Portfolio: React.FC = (): JSX.Element => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 text-white text-center text-4xl font-Bebas_Neue tracking-tight text-transparent md:text-7xl"
      >
        Soon
      </motion.h1>
    </LampContainer>
  );
};

export default Portfolio;
