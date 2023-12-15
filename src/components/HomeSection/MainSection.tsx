import Image from "next/image";
import mainImage from "../../../public/AssettoBG.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useDeviceDetection from "@/hooks/useDeviceDetection";
import PagesWrapper from "../PagesWrapper";
import { useState } from "react";

const Card = ({
  index,
  active,
  elements,
}: {
  active: number;
  index: number;
  elements: number;
}) => {
  const elementsArray = Array.from({ length: elements });

  return (
    <div className="justify-center flex w-full">
      <div className="w-[90%] mb-7 relative md:w-full lg:w-full   h-[372px] md:h-auto">
        <div className="p-4">
          <Image
            className="flex h-[372px] object-[85%]  rounded-[20px] object-cover AssettoBorder overflow-clip w-full md:w-full md:h-full justify-center"
            src={mainImage}
            alt={"Background"}
          />
        </div>
        <div className="absolute md:block bottom-[33%] flex flex-col items-center w-full ">
          <div className="absolute bottom-[33%] md:bottom-[20%] md:left-[7%] text-[14px] md:text-base text-white font-semibold">
            <p className="text-[20px] ml-[10%] md:ml-0 text-center md:text-left mb-[17px] md:mb-0  md:text-4xl md:h-auto md:w-auto w-[185px] h-[44px] font-bold">
              Assetto corsa servers launched
            </p>
            <p className="text-[14px] leading-[15.4px] md:leading-normal md:text-left text-center h-[92px] w-[236px] md:h-auto md:text-base font-light opacity-40 text-white md:w-2/5 pt-5">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <div className="pt-[30px] absolute gap-[20px] pl-[18%] flex flex-col md:flex-row  md:pl-[2px]">
              <button className="buttonBg rounded-[20px] w-[149.34px] h-[38.96px] md:h-[42px] md:w-[180px]">
                READ MORE
              </button>
              <div className="flex items-center top-[47px] left-[200px]">
                <div className="flex items-center pl-[25%] md:pl-0  gap-[3px]">
                  {elementsArray.map((_, i) => {
                    const isActive = active === i;
                    return (
                      <div
                        key={i}
                        className={`cursor-pointer rounded-[20px] bg-[#FFFFFF80] ${
                          isActive
                            ? "opacity-90 h-[7.83px] w-[37px]"
                            : "opacity-20 h-[7.83px] w-[8px]"
                        }`}
                      ></div>
                    );
                  })}
                  {/* <div className="rounded-[20px] bg-[#FFFFFF80] opacity-20 h-[7.83px] w-[17px]"></div>
                  <div className="rounded-[20px] bg-[#FFFFFF80] opacity-20 h-[7.83px] w-[8px]"></div>
                  <div className="rounded-[20px] bg-[#FFFFFF80] opacity-20 h-[7.83px] w-[8px]"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const isMobile = useDeviceDetection();

  return (
    <PagesWrapper>
      <section id="home" className="pb-[50px] md:pb-[125px]">
        <div className="flex justify-between pt-[41px] md:pt-10">
          <Carousel
            onChange={(index) => setActiveCard(index)}
            className="z-10 relative cursor-pointer"
            emulateTouch={true}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
          >
            <Card index={0} active={activeCard} elements={3} />
            <Card index={1} active={activeCard} elements={3} />
            <Card index={2} active={activeCard} elements={3} />
          </Carousel>
        </div>
      </section>
    </PagesWrapper>
  );
};

export default MainSection;
