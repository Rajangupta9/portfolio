import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] mx-auto">
        {/* Left: Profile Card */}
        <div
          className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 shadow-xl rounded-2xl p-8 w-full md:w-[400px] lg:w-[450px] text-center relative overflow-hidden"
        >
          {/* Background decorative circle */}
          <div className="absolute -top-12 -right-16 w-48 h-48 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full blur-3xl opacity-40"></div>

          <img
            src="https://media.licdn.com/dms/image/v2/D4D35AQFV2SymR1jNrA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1708571301074?e=1738321200&v=beta&t=fkBThvN_aWeXxGIyuoJ4YoIipE_Qve7y6OonuujNKt0" // Replace with your image URL
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-md transform hover:scale-105 transition duration-300"
          />

          <h2 className="text-2xl font-bold text-white">
            Nilakshi Sute
          </h2>
          <p className="text-sm text-gray-200 mb-6">
            Frontend Developer 
          </p>

          {/* Contact Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="mailto:nilakshisute2020@gmail.com"
              className="text-white hover:text-gray-200 transform hover:scale-110 transition duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://github.com/Nilakshisute"
              className="text-white hover:text-gray-200 transform hover:scale-110 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nilakshi-sute-8b6577245/"
              className="text-white hover:text-gray-200 transform hover:scale-110 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Quote/Description */}
          <p className="text-xs text-gray-200 italic">
            "Turning ideas into reality through code."
          </p>
        </div>

        {/* Right: Hero Content */}
        <div className="flex flex-col items-center justify-center text-center mt-10 md:mt-0">
          <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
            Dynamic Web Development with JavaScript & React
          </p>

          <TextGenerateEffect
            words="Creating Innovative Solutions for Modern Challenges"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Nilakshi, am passionate about writing clean, efficient, and maintainable code to deliver high-quality solutions.
          </p>

          <a href="https://github.com/Nilakshisute">
            <MagicButton
              title="Explore My Projects"
              icon={<FaGithub />} // Replace with the desired icon
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
