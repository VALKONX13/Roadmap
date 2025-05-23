import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RoadmapItem from "@/components/RoadmapItem";

const Roadmap = () => {
  const roadmapData = [
    {
      id: 2,
      step: "01",
      title: "Platform Launch",
      class: "top-[50%]",
      className:
        "top-[66%] sm:top-[100%] md:top-[115%] left-[5%] xl:left-[-7%] 2xl:left-[5%]",
      date: "2025.05.01",
      items: [
        "Core Arknet Platform Release",
        "Initial NFT Collection Release",
        "@asis Minting Functionality",
      ],
    },
    {
      id: 3,
      step: "02",
      title: "Ecosystem Growth",
      class: "top-[115%] sm:top-[137%]",
      className:
        "top-[68%] sm:top-[100%] lg:top-[115%] md:top-[115%] right-[5%] xl:right-[-7%] 2xl:right-[5%]",
      date: "2025.08.19",
      items: [
        "ARK Protocol Implementation",
        "Creator Dashboard Launch",
        "Community Governance Framework",
      ],
    },
    {
      id: 4,
      step: "03",
      title: "Network Expansion",
      class: "top-[185%] sm:top-[223%]",
      className:
        "top-[64%] sm:top-[100%] lg:top-[115%] md:top-[115%] left-[5%] xl:left-[-7%] 2xl:left-[5%]",
      date: "2025.11.28",
      items: [
        "Approved AI Minting Capabilities",
        "Cross Chain Integration",
        "ARKV Token Public Launch",
      ],
    },
    {
      id: 5,
      step: "04",
      title: "ArkHive 2.0",
      class: "top-[254%] sm:top-[310%]",
      className:
        "top-[68%] sm:top-[100%] lg:top-[115%] md:top-[115%] right-[5%] xl:right-[-7%] 2xl:right-[5%]",
      date: "2026.03.15",
      items: [
        "Global Creative Partnership Program",
        "Full Metaverse Integration",
        "ARK Protocol Enterprise Solutions",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full text-white max-w-[-webkit-fill-available] relative overflow-hidden min-h-screen px-6 md:px-20 lg:px-[6.5rem] xl:px-44 2xl:px-46
      bg-[url('@/assets/images/star-bg.png')] h-[85lh] bg-cover bg-center py-20 [@media((min-width:1925px))]:px-[17rem]"
    >
      <div className="absolute inset-0 bg-cover opacity-20 pointer-events-none" />
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-1 mokoto-regular">
        PROJECT ARK
      </motion.h1>
      <motion.div>
        <p
          className="absolute text-md md:text-xl right-[13%] md:right-[8%] lg:right-[7%] xl:right-[8%] 2xl:right-[22%] top-[11.1%]
          sm:top-[12%] md:top-[5.8%] lg:top-[6.4%] space-x-4 text-gray-600 sm:inline hidden
          [@media((min-width:1370px))]:right-[12vw]
          [@media((min-width:1400px))]:right-[15vw]
          [@media((min-width:1500px))]:right-[17vw] 
          [@media((min-width:1600px))]:right-[25vw]
          [@media((min-width:1680px))]:right-[27vw]
          [@media((min-width:1700px))]:right-[29vw]
          [@media((min-width:1770px))]:right-[31vw]
          [@media((min-width:1820px))]:right-[33vw]
          [@media((min-width:1880px))]:right-[34vw]
          [@media((min-width:1925px))]:right-[32vw]">
          2024
        </p>
      </motion.div>
      <div className="relative flex flex-col items-center sm:gap-0 space-y-24 mt-4 sm:mt-0">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="static sm:absolute m-0 top-0 text-center max-w-[500px]">
          <p className="m-0 pt-2 font-light text-xs md:text-md lg:text-xl font-azeret">
            Our vision for the future and the economic foundation of the ARKHIVE
            ecosystem
          </p>
          <p className="font-azeret font-bold text-xl md:text-2xl xl:text-3xl pb-9 my-3 sm:mt-0 mokoto-regular whitespace-nowrap">
            Development roadmap
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="absolute sm:relative mb-0 w-[50vw] sm:w-[70vw] max-w-[270px] aspect-square flex justify-center items-center 
            bg-[radial-gradient(50%_50%_at_50%_50%,_#8C52FF_0%,_rgba(140,82,255,0.3)_40%,_rgba(17,11,52,0)_100%)] 
            md:absolute 2xl:top-[16%] xl:top-[16%] lg:top-[15%] md:top-[13%] 
            sm:top-[33vw] top-[21%] [@media((width>=40rem))]:top-[32vw] [@media((width>=48rem))]:top-[14vw]
            [@media((min-width:420px))]:top-[20%]
            [@media((min-width:455px))]:top-[19%]
            [@media((min-width:470px))]:top-[18%]
            [@media((min-width:500px))]:top-[17%]
            [@media((width>=50rem))]:top-[12%]
            [@media((width>=64rem))]:top-[16%]
            right-[18vw] md:right-[-10%] lg:right-[5vw] 2xl:right-[16%]
            [@media((min-width:550px))]:right-[22%] 
            [@media((width>=40rem))]:right-[-15vw]
            [@media((width>=48rem))]:right-[-5%]
            [@media((width>=64rem))]:right-[8%]">
          {/* WE ARE HERE */}
          <Image
            src="/we-are-here.svg"
            alt="We are here"
            width={500}
            height={500}
            className="absolute z-20 top-[5%] right-[45%] lg:left-[50%] lg:scale-x-[1] scale-x-[-1] hidden sm:inline"
          />
          <p className="mokoto-regular self-baseline w-max absolute right-[65%] sm:right-[93%] top-[35%] sm:top-[-5%] 
            2xl:left-[98%] xl:left-[97%] lg:left-[97%] md:right-[26vw] md:top-[-1vw] sm:flex">
            We&nbsp;Are&nbsp;<span className="text-[#8C52FF]">Here</span>
            &nbsp;Now
          </p>
          <svg
            className="w-[130px] h-0.5 text-white m-0 sm:hidden z-10 absolute left-[-32%]
            [@media((min-width:341px))]:left-[-25%]
            [@media((min-width:400px))]:left-[-20%]
            [@media((min-width:460px))]:left-[-15%]
            [@media((min-width:500px))]:left-[-10%]"
            viewBox="0 0 70 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
              x1="0"
              y1="0.5"
              x2="130"
              y2="0.5"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
          <div className="relative sm:w-[65px] sm:h-[60px] w-[50px] h-[45]">
            <Image
              src="/astronaut.png"
              alt="Astronaut"
              fill
              className="z-10 object-contain"
            />
          </div>
        </motion.div>
        <motion.div
          className="m-0 inline sm:hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}>
          <p className="text-gray-600 pb-4 [@media((width>=430px))]:pl-10 [@media((width>=430px))]:pb-8 text-md">2024</p>
        </motion.div>
        {/* Roadmap Items */}
        {roadmapData.map((phase, index) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.7 }}
            className={`static sm:absolute md:relative flex flex-col w-fit sm:w-full align-baseline m-0 mb-22 sm:mb-0 ${
              phase.class || ""
            } ${phase.id % 2 === 1 ? "items-end" : "items-start"}`}
          >
            {/* Skip connector on the last phase */}
            <div
              key={phase.id}
              id={String(phase.id)}
              className={`static sm:absolute transform md:translate-x-[-50%] md:translate-y-[-50%] w-fit ${
                phase.className || ""
              }`}
              style={{zIndex: "10"}}>
              <RoadmapItem
                title={phase.title}
                date={phase.date}
                items={phase.items}
                id={phase.id}
                stepNumber={phase.step}
              />
            </div>
            {index !== roadmapData.length && (
              <motion.div
                className="w-max relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 + index * 0.2, duration: 0.7 }}>
                <div
                  className={`absolute top-[-2.7%] ${
                    phase.id % 2 === 1
                      ? "left-[40%] top-[-11px] scale-x-[-1]"
                      : "left-[30%] top-[-11px]"
                  } w-[4vw] h-[4vw] min-w-[15px] min-h-[15px] max-w-[25px] max-h-[25px]`}>
                  {/* POLYGON ICONS */}
                  <Image
                    src="/polygon.svg"
                    alt="Polygon"
                    fill
                    className="object-contain transform sm:inline hidden"
                    sizes="(max-width: 768px) 5vw, 15px"
                  />
                </div>
                {/* CONNECTOR LINES */}
                <Image
                  src="/line-vec.svg"
                  alt="Line Vector"
                  width={1000}
                  height={10}
                  className="m-0 max-w-[70vw] h-[2px] sm:hidden rotate-90"
                />
                <Image
                  src="/Vector.svg"
                  alt="Connector"
                  width={1000}
                  height={200}
                  className={`w-full max-w-[75vw] h-auto relative transform transition-transform duration-300 hidden sm:flex ${
                    index % 2 === 1
                      ? "scale-x-[-1] left-[0%] top-[-5%]"
                      : "top-[5%] right-[0%]"
                  }`}
                />
                <div
                  className={`sm:absolute top-[45%] ${
                    phase.id % 2 === 1 ? "right-[-2%] lg:right-[-1.3%] xl:right-[-1.3%]" : "left-[-1.6vw] lg:left-[-1.3%] xl:left-[-1.3%]"
                  } w-[4vw] h-[4vw] min-w-[15px] min-h-[15px] max-w-[25px] max-h-[25px]`}>
                  <Image
                    src="/polygon.svg"
                    alt="Polygon"
                    fill
                    className={`object-contain transform rotate-[270deg] my-6 sm:my-0
                      ${
                        phase.id % 2 === 1
                          ? "!sm:left-[11px]"
                          : "!sm:left-[-11px]"
                      }`}
                    sizes="(max-width: 768px) 5vw, 15px"
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="absolute sm:hidden inline m-0 w-[70px] h-[45px] rotate-[270deg] bottom-[-5%]
            [@media((min-width:510px))]:bottom-[-10%]">
          <Image
            src="/space-shuttle.png"
            alt="Space Shuttle"
            fill
            className="static"
          />
        </motion.div>
        <motion.div
          className="absolute sm:top-[393%] top-[326%] h-[50px] md:relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}>
          {/* SHUTTLE */}
          <Image
            src="/space-shuttle.png"
            alt="Space Shuttle"
            fill
            className="absolute !top-[-44%] !w-fit !sm:w-[60px] !sm:h-[60px] !md:w-[80px] !md:h-[80px]
              !lg:w-[100px] !lg:h-[100px] object-contain"
          />
          <Image
            src="/line-vec.svg"
            alt="Line Vector"
            width={1000}
            height={10}
            className="m-0 max-w-[70vw] h-[2px] bg-[#8c52ff]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Roadmap;
