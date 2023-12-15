import Image from "next/image";
import StaticPagesWrap from "./HomeSection/StaticPageWrap";
import logo from "../../public/logo.png";
import search from "../../public/Search.png";
import useDeviceDetection from "@/hooks/useDeviceDetection";

const Header = () => {
  const isMobile = useDeviceDetection();
  return (
    <StaticPagesWrap>
      <section className="flex justify-center w-[100%]" id="home">
        <div className="flex justify-between w-[90%] md:w-[98%] pt-8">
          <div className="flex items-center pb-0 justify-start">
            <div className=" pr-2 md:pr-5">
              <Image
                className="md:w-[32px] md:h-[34px] w-[23.53px] h-[25px] "
                src={logo}
                alt={"logo"}
              />
            </div>
            <p className="text-gray-100 mr-0 font-inter text-[14px] md:text-xl font-light leading-6">
              BALTIC
            </p>
            <p className="text-gray-100 ml-0 font-inter text-[14px] md:text-xl font-semibold leading-6">
              GAMING
            </p>
          </div>
          <div className="w-[100px] md:w-[325px] mr-[2%] md:mr-[1%] justify-between items-center h-[25px] md:h-[44px] borderCs flex">
            <div className="gap-3 flex w-[100%] items-center justify-start md:px-5 px-3">
              <Image
                className="md:bottom-[13px] w-[10.83px] h-[10.8px] md:h-[15px] md:w-[15px]"
                src={search}
                alt={"logo"}
              />

              <div className="w-[90%]">
                <input
                  type="text"
                  placeholder={isMobile ? "Search..." : "Type to search..."}
                  id="simple-search"
                  className="text-white text-center pl-0 md:pl-[4%] opacity-[40%] bg-transparent flex items-center justify-center w-[100%] text-[12px] md:text-sm focus:outline-0 h-[35px] md:h-[35px]"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StaticPagesWrap>
  );
};

export default Header;
