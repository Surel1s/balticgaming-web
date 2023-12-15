import PagesWrapper from "./PagesWrapper";

const ConnectEngage = () => {
  return (
    <PagesWrapper>
      <section id="contact-us" className="">
        <div className="md:inline flex justify-center">
          <div className="mb-[50px] md:mb-[62px] mt-[50px] md:mt-[125px] h-[2px] md:h-[2.5px] md:w-full flex items-center w-[85.7%] rounded-lg  line"></div>
        </div>
        <div className="flex flex-col  justify-center">
          <div className="md:text-4xl  flex-col md:flex-row text-[23.52px] w-auto justify-center  flex text-white">
            <p className="font-semibold pr-1 flex justify-center md:inline">
              BALTIC GAMING.{" "}
            </p>
            <p className=" md:pl-0 flex justify-center md:inline">
              {" "}
              CONNECT. ENGAGE. COMPETE.
            </p>
          </div>
          <div className="text-[#FFFFFF] md:pt-2 pb-[10px] md:pb-7 flex justify-center  mb-8 opacity-10 text-[12px] md:text-[16px]">
            <p>If you’re intrested in our project, please contact us</p>
          </div>
          <div className="flex  justify-center mb-[50px] md:mb-[75px] ">
            <a href="">
              <button className="rounded-[20px] text-[14px] md:text-[16px] font-semibold text-white h-[38.96px] w-[149.34px] md:h-[48px] md:w-[221px] connectButtonBG">
                GET IN TOUCH
              </button>
            </a>
          </div>
        </div>
      </section>
    </PagesWrapper>
  );
};

export default ConnectEngage;
