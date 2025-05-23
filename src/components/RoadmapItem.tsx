import Image from "next/image";

interface RoadmapItemProps {
  title: string;
  date: string;
  items: string[];
  id: number;
  stepNumber: string;
}

export default function RoadmapItem({
  title,
  date,
  items,
  id,
  stepNumber,
}: RoadmapItemProps) {
  return (
    <div
      className={`static sm:absolute w-[200px] md:w-[330px] lg:w-[400px] xl:w-[530px] py-3 md:lg-5 lg:py-8 pl-3 pr-3 md:pr-7 lg:px-7 flex flex-col box-content
        sm:-bottom-16 font-azeret rounded-2xl max-w-md bg-[#473171] border border-[#8c52ff] bg-[url('@/assets/images/star-bg.png')] bg-center
        ${ id % 2 === 1 ? "right-[30%]" : "left-[30%]"}`}>
      <div className="relative">
        <p
          style={{ writingMode: "vertical-rl" }}
          className={`block md:hidden text-xs text-gray-500 absolute ${
            id % 2 === 1 ? "bottom-[25%] sm:bottom-[65%] right-[-25%] sm:right-[-20%]"
            : "top-[25%] sm:top-[-23%] left-[-20%] sm:left-[-20%]"}`}>
            {date}
        </p>
        <p
          className={`font-azeret hidden md:block text-xs text-gray-500 absolute ${
            id % 2 === 1 ? "xl:bottom-[35%] lg:bottom-[32%] md:bottom-[44%] bottom-[60%] left-[-23%]"
            :"xl:bottom-[35%] lg:bottom-[30%] md:bottom-[44%] bottom-[60%] right-[-28%] lg:right-[-23%] 2xl:right-[-21%]"}`}>
            {date}
        </p>
        <h3
          className={`mokoto-regular text-xl md:text-2xl font-bold text-white pb-1 mf:pb-2 lg:pb-3 ${
            title ? "border-b-gray-600 border-b-1" : ""}`}>
          {title}
        </h3>
        <div className="relative space-x-40 text-purple-200 flex">
          <div className="flex flex-col grow m-0 gap-2 md:gap-3 lg:gap-6 pt-2 md:pt-3 lg:pt-5">
            {items?.map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                <Image
                  src="/check-svg.svg"
                  alt="Check Icon"
                  width={15}
                  height={15}
                  className="w-[15px] md:w-auto"/>
                <p className="font-azeret text-xs md:text-lg text-white/50">{item}</p>
              </div>
            ))}
          </div>
          <p
            className=" mx-2 md:mx-5 mb-2 md:mb-3 text-purple-500 absolute right-1/6 bottom-[-10%] left-[55%] lg:left-[65%] opacity-30 self-end 
              rounded-full flex justify-around font-bold text-7xl md:text-9xl">
            {stepNumber}
          </p>
        </div>
      </div>
    </div>
  );
}
