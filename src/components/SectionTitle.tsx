import { useEffect, useRef, useState } from "react";
import PagesWrapper from "./PagesWrapper";

interface SectionProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionProps) => {
  return (
    <div className=" md:mb-16">
      <PagesWrapper>
        <div className="flex flex-col pl-[18px] md:pl-4 pt-12 pb-12">
          <div className="flex whitespace-nowrap items-center">
            <div className="text-[20px] md:text-[36px] text-white font-semibold">
              <p>{title}</p>
            </div>
            <div className=" ml-[23px] md:ml-[40px] h-[2px] sectionTitleLine w-[100%] md:mr-5 md:w-full"></div>
          </div>
          <div className="text-white pt-2 opacity-40 text-[12px] md:text-base">
            <p>{subtitle}</p>
          </div>
        </div>
      </PagesWrapper>
    </div>
  );
};

export default SectionTitle;
