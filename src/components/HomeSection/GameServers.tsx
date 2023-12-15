import Image from "next/image";
import csgoImage from "../../../public/gameServers/CSGO.png";
import assettoImage from "../../../public/gameServers/Assetto.png";
import rustImage from "../../../public/gameServers/Rust.png";
import mcImage from "../../../public/gameServers/Minecraft.png";
import PagesWrapper from "../PagesWrapper";
import SectionTitle from "../SectionTitle";

const GameServers = () => {
  const gameList = [
    {
      image: csgoImage,
      alt: "csgo",
      title: "COUNTER STRIKE: GLOBAL OFFENSIVE",
    },
    {
      image: assettoImage,
      alt: "csgo",
      title: "ASSETTO CORSA",
    },
    {
      image: rustImage,
      alt: "csgo",
      title: "RUST",
    },
    {
      image: mcImage,
      alt: "csgo",
      title: "MINECRAFT",
    },
  ];

  return (
    <PagesWrapper>
      <section
        id="servers"
        className="bg-[#191c1e] w-full flex  flex-col justify-center"
      >
        <div className="">
          <SectionTitle
            title="Join our game servers"
            subtitle="We have our own official servers that you may like"
          />
        </div>
        <div className="w-full ">
          <div className="flex justify-between pl-4 pr-4 pt-10 pb-9 space-x-5 md:space-x-0 overflow-x-auto md:overflow-x-hidden overflow-y-hidden">
            {gameList.map((el, i) => {
              return (
                <a
                  href=""
                  key={i}
                  className=" brightness-75 GameServer mr-5 md:mr-0  hover:brightness-100 flex-shrink-0 md:flex-shrink transform transition-all duration-300 md:hover:scale-110"
                >
                  <Image
                    src={el.image}
                    alt={el.alt}
                    className="md:w-[230px] rounded-[20px] hover:border-[5px] duration-200 border-[#2E3234]  w-[300px] h-auto"
                  />
                  <div className="w-[60%]  absolute bottom-[20px] md:bottom-[40px] select-none left-1/2 transform -translate-x-1/2 -translate-y-1 text-white font-semibold">
                    <p className=" text-xs md:text-base text-center font-semibold">
                      {el.title}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </PagesWrapper>
  );
};

export default GameServers;
