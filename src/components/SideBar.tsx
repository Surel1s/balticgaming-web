import homeIcon from "../../public/sidebar/home.png";
import discordIcon from "../../public/sidebar/discord.png";
import contactUsIcon from "../../public/sidebar/contactUs.png";
import newsIcon from "../../public/sidebar/news.png";
import roadmapIcon from "../../public/sidebar/roadmap.png";
import serversIcon from "../../public/sidebar/servers.png";
import servicesIcon from "../../public/sidebar/services.png";
import sponsorsIcon from "../../public/sidebar/sponsors.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SideBar() {
  const [activeButton, setActiveButton] = useState("");
  const [isHovering, setIsHovering] = useState(-1);

  useEffect(() => {
    const handleIntersection = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.target.id !== activeButton && entry.isIntersecting) {
          setActiveButton(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5,
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
  }, [activeButton]);

  function handleMouseOver(id: number) {
    return setIsHovering(id);
  }
  const handleMouseOut = () => {
    return setIsHovering(-1);
  };

  const lists = [
    {
      image: homeIcon,
      name: "Home & News",
      link: "#home",
      activeSection: "home",
    },
    {
      image: sponsorsIcon,
      name: "Sponsors",
      link: "#sponsors",
      activeSection: "sponsors",
    },
    {
      image: servicesIcon,
      name: "Services",
      link: "#services",
      activeSection: "services",
    },
    {
      image: roadmapIcon,
      name: "Roadmap",
      link: "#roadmap",
      activeSection: "roadmap",
    },
    {
      image: discordIcon,
      name: "Discord",
      link: "#discord",
      activeSection: "discord",
    },
    {
      image: serversIcon,
      name: "Servers",
      link: "#servers",
      activeSection: "servers",
    },
    {
      image: contactUsIcon,
      name: "Contact Us",
      link: "#contact-us",
      activeSection: "contact-us",
    },
  ];

  return (
    <div className="scrollbar-thumb-none">
      <div className="flex flex-col justify-between items-center absolute right-0 md:w-[78px] lg:w-[78px] w-[18%] h-screen bg-[#16191B] py-8">
        {lists.map((el, i) => {
          return (
            <div key={i} className="relative">
              <div
                className={`hover:brightness-50 transition duration-500 ${
                  activeButton === el.activeSection
                    ? "active brightness-50"
                    : ""
                }`}
                onMouseOver={() => handleMouseOver(i)}
                onMouseOut={handleMouseOut}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    const id = document.getElementById(el.activeSection);
                    id?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setActiveButton(el.link);
                  }}
                >
                  <Image src={el.image} alt={el.name} />
                </div>
              </div>
              {isHovering === i && (
                <div className="w-[150px] pr-[5px] z-10 gap-4 absolute flex items-center justify-end top-0 text-white right-[50px]">
                  {el.name}
                  <div className="hoveringStyle"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
