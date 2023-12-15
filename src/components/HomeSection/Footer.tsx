import Image from "next/image";
import PagesWrapper from "../PagesWrapper";
import logo from "../../../public/logo.png";
import facebook from "../../../public/social/facebook.png";
import youtube from "../../../public/social/youtube.png";
import tiktok from "../../../public/social/tiktok.png";
import useDeviceDetection from "@/hooks/useDeviceDetection";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const FooterSection = () => {
  const [activeButton, setActiveButton] = useState("");

  const [visibleSection, setVisibleSection] = useState("");
  let selectedSection: any;
  const divRef = useRef<HTMLElement>(null);

  const [isHovering, setIsHovering] = useState(-1);
  const [activeSection, setActiveSection] = useState("");
  const isMobile = useDeviceDetection();

  const socials = [
    {
      image: facebook,
      alt: "facebook",
      height: "h-[26px]",
      width: "w-[12px]",
    },
    {
      image: youtube,
      alt: "youtube",
      height: "h-[17.42px]",
      width: "w-[25px]",
    },
    {
      image: tiktok,
      alt: "tiktok",
      height: "h-[22.36px]",
      width: "w-[17.88px]",
    },
  ];

  const lists = [
    {
      text: "HOME",
      name: "Home",
      link: "#home",
      activeSection: "home",
    },
    {
      text: "SPONSORS",
      name: "Sponsors",
      link: "#sponsors",
      activeSection: "sponsors",
    },
    /*     {
      text: "NEWS",
      name: "News",
      link: "#section-#",
      activeSection: "section-#",
    },
 */ {
      text: "SERVICES",
      name: "Services",
      link: "#services",
      activeSection: "services",
    },
  ];

  const list2 = [
    {
      text: "ROADMAP",
      name: "Roadmap",
      link: "#roadmap",
      activeSection: "roadmap",
    },
    {
      text: "SERVERS",
      name: "Servers",
      link: "#servers",
      activeSection: "servers",
    },
    {
      text: "CONTACT US",
      name: "Contact us",
      link: "#contact-us",
      activeSection: "contact-us",
    },
  ];

  useEffect(() => {
    const handleIntersection = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          setActiveButton(sectionId);
          setVisibleSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-60px",
      threshold: 0,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  function handleMouseOver(id: number) {
    return setIsHovering(id);
  }
  const handleMouseOut = () => {
    return setIsHovering(-1);
  };

  return (
    <section
      id="contact-us"
      className="bg-[#16191B] md:pl-0 pl-[18px] pt-[45px]"
    >
      <PagesWrapper>
        <div className="pl-4 flex flex-col md:flex-row md:justify-between w-full">
          <div className="flex md:flex-col md:w-[50%] w-[100%]">
            <div className="flex flex-col">
              <div className="flex items-center pb-0 md:justify-start">
                <div className="pr-[10px] md:pr-5">
                  <Image
                    src={logo}
                    alt={"logo"}
                    className=" w-[30.01px] h-[32.08px] md:w-[58px] md:h-[62px] "
                  />
                </div>
                <p className="text-gray-100 mr-0 text-[20.7px] md:text-[40px] font-light">
                  BALTIC
                </p>
                <p className="text-gray-100 ml-0 text-[20.7px] md:text-[40px] font-semibold">
                  GAMING
                </p>
              </div>
              <div className="flex flex-col md:w-[80%]">
                <p className=" text-[#FFFFFF] pt-[20px] flex flex-row opacity-40 font-light text-[12px] md:text-[16px]">
                  Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora toruent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nil, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
                <div className="text-[#FFFFFF] mt-[20px] md:mt-[62px] mb-[20px] md:mb-[62px] flex flex-row opacity-40 text-[12px]">
                  <p>www.balticgaming.gg | All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-[0px] md:pt-[15px] md:w-[50%] w-[100%]">
            <div className="flex justify-between  md:w-full w-[95%]">
              <div className="flex flex-col gap-[7px] md:gap-[14px] text-white text-[14px] md:text-normal">
                <div className="flex gap-x-[7px] md:gap-[14px] text-white text-[14px] md:text-normal content-start">
                  <div className="flex flex-col gap-x-[7px] md:gap-[14px] text-white text-[14px] md:text-base content-start">
                    <div className="flex-row flex gap-x-[98px]">
                      {lists.map((el) => {
                        return (
                          <div key={el.name} className="">
                            <Link href={el.link}>
                              <p>{el.text}</p>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex-row flex gap-x-[90px]">
                      {list2.map((el) => {
                        return (
                          <div key={el.name}>
                            <Link href={el.link}>
                              <p>{el.text}</p>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[100%] w-[90%] flex justify-between mt-[20px] mb-[50px] md:mb-0 md:mt-[90px]">
              {socials.map((el) => {
                return (
                  <a
                    key={el.alt}
                    href=""
                    className="sButtonBg pt-[4px] rounded-full flex justify-center items-center h-[44px] w-[44px]"
                  >
                    <Image
                      className={`${el.height} ${el.width}`}
                      src={el.image}
                      alt={el.alt}
                    />
                  </a>
                );
              })}
              {!isMobile && (
                <a
                  href="https://discord.gg/balticgaming"
                  className="flex items-center justify-center footerButton h-[48px] w-[221px] text-base text-white font-semibold"
                >
                  JOIN DISCORD
                </a>
              )}
            </div>
          </div>
        </div>
      </PagesWrapper>
    </section>
  );
};

export default FooterSection;
// <Link href="#Section-1">
{
  /* <p>HOME</p>
</Link>
<a href="">ROADMAP</a>
</div>
<div className="flex flex-col gap-[7px] md:gap-[14px] text-white text-[14px] md:text-normal">
<a href="">SPONSORS</a>
<a href="">SERVERS</a>
</div>
<div className="flex flex-col gap-[7px] md:gap-[14px] text-white text-[14px] md:text-normal">
<a href="">NEWS</a>
<a href="">CONTACT US</a>
</div>
<div className="flex flex-col gap-[7px] md:gap-[14px] text-white text-[14px] md:text-normal">
<a href="">SERVICES</a> */
}
