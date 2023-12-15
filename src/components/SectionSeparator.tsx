import StaticPagesWrap from "./HomeSection/StaticPageWrap";

const SectionSeparator = ({ text, id }: { text: string; id: string }) => {
  return (
    <section id={id} className="bg-[#16191B]">
      <StaticPagesWrap>
        <div className="flex pl-[18px] md:pl-4 pt-12 pb-12 row">
          <div className="text-[24px] md:text-3xl text-white font-bold">
            <p>{text}</p>
          </div>
          <div className=" ml-[23px] md:ml-10 mt-4 h-[5px] rounded-lg separatorLine w-[55%] md:w-full"></div>
        </div>
      </StaticPagesWrap>
    </section>
  );
};

export default SectionSeparator;
