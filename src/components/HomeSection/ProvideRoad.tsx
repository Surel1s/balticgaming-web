import PagesWrapper from "../PagesWrapper";
import Image from "next/image";
import chartIcon from "../../../public/provideRoad/provideChart.svg";
import rankingIcon from "../../../public/provideRoad/provideRanking.svg";
import cupIcon from "../../../public/provideRoad/provideCup.svg";
import cpuIcon from "../../../public/provideRoad/provideCpu.svg";
import statisticIcon from "../../../public/provideRoad/provideStatistic.svg";
import SectionTitle from "../SectionTitle";
import RoadMap from "./RoadMap";

const ProvideRoad = () => {
  const provideList = [
    {
      image: statisticIcon,
      width: "100px",
      mobileWidth: "50px",
      style: "provideDK",
    },
    {
      image: cpuIcon,
      width: "100px",
      mobileWidth: "50px",
      style: "provideRD",
    },
    {
      image: cupIcon,
      width: "100px",
      mobileWidth: "50px",
      style: "provideDK",
    },
    {
      image: rankingIcon,
      width: "100px",
      mobileWidth: "50px",
      style: "provideDK",
    },
    {
      image: chartIcon,
      width: "100px",
      mobileWidth: "50px",
      style: "provideDK",
    },
  ];

  return (
    <PagesWrapper>
      <section
        id="services"
        className="pl-0 md:pl-4 md:mb-10 md:pt-20 bg-[#191c1e] mt-[50px] flex flex-col"
      >
        <div className="">
          <SectionTitle
            title="What we provide"
            subtitle="We are concentrating on many things and developing them, get to
              know us"
          />
        </div>
        <div className="flex flex-row justify-center md:space-x-[105px]">
          <div className="flex pt-[1%] pb-[1%]   scrollbar-none md:justify-between overflow-x-auto w-full pr-[15px] md:px-[25px]">
            {provideList.map((el, i) => {
              return (
                <div className=" " key={i}>
                  <div className=" pt-[10%] pb-[5%] overflow-visible">
                    <div
                      className={`flex justify-center items-center ${el.style} md:w-[180px] md:h-[180px] w-[80px] h-[80px] transform transition-all duration-300 hover:scale-110 overflow-visible`}
                    >
                      <Image
                        className={`w-[${el.mobileWidth}] scale-75 md:scale-100 md:w-[${el.width}] `}
                        src={el.image}
                        alt={"grow"}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="section-3"></div>
      </section>
    </PagesWrapper>
  );
};

export default ProvideRoad;
