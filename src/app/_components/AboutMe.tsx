import { TracingBeam } from "@/components/tracing-beam";
import React from "react";

const AboutMe: React.FC = (): JSX.Element => {
  return (
    <section
      id="about_me"
      className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900"
    >
      <TracingBeam className="px-10 py-7 lg:px-0">
        <div>
          <h1>Tentang Gue</h1>
        </div>
      </TracingBeam>
    </section>
  );
};

export default AboutMe;
