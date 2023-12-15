import PagesWrapper from "../PagesWrapper";
import Image from "next/image";
import discord from "../../../public/DiscordBG.png";
import SectionTitle from "../SectionTitle";
import axios from "axios";
import { useEffect, useState } from "react";

interface DiscordProps {
  approximate_presence_count: number;
  approximate_member_count: number;
}

const DiscordLink = () => {
  const serverInviteCode = "balticgaming-gg-806517226366566411";
  const [discordData, setDiscordData] = useState<DiscordProps>();
  useEffect(() => {
    (async () => {
      const { data }: { data: DiscordProps } = await axios.get(
        `https://discord.com/api/v9/invites/${serverInviteCode}?with_counts=true&with_expiration=true`
      );
      setDiscordData(data);
    })();
  }, []);
  return (
    <PagesWrapper>
      <section
        id="discord"
        className="pt-[50px] md:pt-20 pb-[50px] w-[100%] md:pb-20 flex flex-col items-center md:items-start"
      >
        <div className=" ">
          <SectionTitle
            title="Join our discord server"
            subtitle="All our discussions are currently in discord server, join to stay
          updated"
          />
        </div>
        <div className=" relative">
          <Image
            src={discord}
            alt={"discord background"}
            className="object-[7%] rounded-[20px] flex h-[390px] w-[287px] object-cover md:w-full md:h-full justify-center"
          />
          <div className="absolute md:flex md:justify-center top-[10%] md:top-[36%] left-[17%] md:left-[0%] text-base text-white font-semibold w-full">
            <div className="flex flex-col pl-[10%] md:pl-0 md:flex-row justify-center items-start w-full">
              <div className="flex flex-col pt-1 items-center w-[50%]">
                <div className="flex">
                  <p className="text-[24px] md:text-[40px] font-normal">
                    BALTIC
                  </p>
                  <p className="text-[24px] md:text-[40px] font-bold">
                    GAMING.GG
                  </p>
                </div>
                <p className="text-[12px] md:text-base text-center w-[224px] md:w-[314px] opacity-90 font-light text-white  pt-2">
                  Our project aims to become the biggest gaming project in the
                  Baltic countries. Join and become part of our journey!
                </p>
              </div>
              <div className="flex flex-col pt-[51px] md:pt-0 items-center w-[50%]">
                <div className="gap-[19px] flex flex-col md:flex-row items-center justify-center">
                  <div className=" flex items-center justify-center border-[#00C667] w-[144px] h-[24px] md:h-auto md:w-auto md:py-[4px] md:px-[23px] border-[1.8px] rounded-[45px]">
                    <div className="bg-[#00C667] pr-[5px] md:pr-0  w-[9.12px] h-[9.12px] md:h-[12px] md:w-[12px] rounded-full md:mr-[14px]" />
                    <div className="flex pl-[10.05px] md:pl-0 gap-[3px]">
                      <p className="font-semibold text-[10.43px] md:text-sm">
                        {discordData?.approximate_presence_count}
                      </p>
                      <p className="font-normal text-[10.43px] md:text-sm">
                        Online members
                      </p>
                    </div>
                  </div>
                  <div className="flex  justify-center items-center border-[#0067C6] w-[144px] h-[24px] md:h-auto md:w-auto md:py-[4px] md:px-[23px] border-[1.8px] rounded-[45px]">
                    <div className="bg-[#0067C6] w-[9.12px] h-[9.12px] md:h-[12px] md:w-[12px] rounded-full md:mr-[14px]" />
                    <div className="flex pl-[10.05px] md:pl-0 gap-[3px]">
                      <p className="font-semibold text-[10.43px] md:text-sm">
                        {discordData?.approximate_member_count}
                      </p>
                      <p className="font-normal text-[10.43px] md:text-sm">
                        Total members
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id="section-5"
                  className="flex pl-1 flex-row items-center justify-center mt-[35px]"
                >
                  <a href="">
                    <button className="rounded-[20px] w-[149.34px] h-[34.96px] md:h-[42px] md:w-[205px]  pl-1 buttonBg text-[14px] md:text-[16px]">
                      JOIN DISCORD
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PagesWrapper>
  );
};

export default DiscordLink;
