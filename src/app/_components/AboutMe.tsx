import React, { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { LinkPreview } from "@/components/link-preview";

const AboutMe: React.FC = (): JSX.Element => {
  const codeToString: string = `
    interface IProfile {
      name: string;
      location: string;
      currentRole: string;
      passions: string[];
    }
    
    const myTechJourney: IProfile = {
      name: "M. Aji Perdana",
      location: \`\${"Lampung" && "Bandung" ? "Indonesia" : "Earth"}\`,
      currentRole: "Full-Stack Web Developer",
      passions: ["Frontend Web", "Backend Developer", "System Analyst"],
    }

    const aboutMe: string[] = [
      "👀 I'm passionate about everything related to Typescript and Golang.",
      "🌱 I’m continuously learning and expanding my knowledge in the world of programming."
      "💻 I'm focused on Frontend Web Development and using technologies
       like React, Angular, Next.js",
      "📱 I enjoy Mobile Development with React Native and Flutter.",
      "⚙️ In the backend, I'm into building REST APIs
       and Microservices using Nest.js, Golang,
       Java Spring Boot, MongoDB, PostgreSQL, RabbitMQ, MQTT (for IoT connectivity)."
    ]

    const sayHello = async (): Promise<void> => {
      Logger.log
        (\`\ 
          🚀 Hello World! I'm \${myTechJourney.name}\n          from \${myTechJourney.location}\n        \`\)
     }
          
    await sayHello()
  `;

  const customStyle = {
    backgroundColor: "transparent",
    fontSize: "0.8rem",
  };

  const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const isInView: boolean = useInView(ref);

  return (
    <section
      id="about_me"
      className="min-h-screen h-full bg-gradient-to-b from-gray-950 to-gray-900"
    >
      <div className="container px-10 py-4 lg:px-0 flex flex-col gap-3 lg:gap-0 lg:flex-row justify-around items-start h-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
          transition={{ duration: 1, ease: "backOut", delay: 0.2 }}
          ref={ref}
          className="w-[90%] mt-7"
        >
          <CardContainer className="inter-var">
            <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-gray-950 border border-white/[0.2] w-fit h-auto rounded-xl p-6">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                About Me
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-gray-300 text-sm max-w-sm mt-2 "
              >
                Hi, I{"'"}m M.Aji Perdana 👋, Welcome to my space!
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/images/avatar.jpg"
                  height="1000"
                  width="1000"
                  className="h-96 w-96 object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={24}
                  as={Link}
                  href="https://www.linkedin.com/in/m-aji-perdana-3807071bb/"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Hire Me →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Download CV
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <div className="px-16 mt-8">
            <LinkPreview
              url="https://github.com/ajiaja38"
              className="font-bold"
            >
              Github
            </LinkPreview>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ ease: "linear", duration: 0.5 }}
          ref={ref}
          className="w-[120%] hidden lg:block"
        >
          <SyntaxHighlighter
            style={a11yDark}
            customStyle={customStyle}
            language="typescript"
          >
            {codeToString}
          </SyntaxHighlighter>
        </motion.div>
        <div className="w-full lg:hidden">
          <SyntaxHighlighter
            style={a11yDark}
            customStyle={customStyle}
            language="typescript"
          >
            {codeToString}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
