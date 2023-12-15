import roadmap from "../../../public/roadmap.png";
import PagesWrapper from "../PagesWrapper";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

const RoadMap = () => {
  return (
    <PagesWrapper>
      <section id="roadmap" className="mb-[100px] pt-[70px]">
        <SectionTitle
          title="Our roadmap"
          subtitle="We have set goals that we are already working on, or have even
            accomplished"
        />
        <div className="  h-auto md:w-auto md:scale-100 flex-shrink-0 overflow-x-auto md:overflow-hidden w-[500px] pl-4  md:mt-[50px] flex justify-center">
          <Image
            src={roadmap}
            alt={"roadmap"}
            className=" overflow-x-auto md:overflow-hidden"
          />
        </div>
        <div className="pb-8"></div>
      </section>
    </PagesWrapper>
  );
};

export default RoadMap;
