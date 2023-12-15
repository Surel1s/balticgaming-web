import PagesWrapper from "../PagesWrapper";
import SectionTitle from "../SectionTitle";

const SponsorCard = () => {
  return (
    <div className="">
      <div className="text-xl opacity-40 text-white">
        <p>SPONSOR</p>
      </div>
      <div className="text-xl text-center opacity-40 text-white">
        <p>LOGO</p>
      </div>
    </div>
  );
};

const CompanyPartners = () => {
  return (
    <section id="sponsors" className="mb-125 ">
      <PagesWrapper>
        <div className="flex flex-col mt-16">
          <div className="">
            <SectionTitle
              title="Our Partners and Sponsors"
              subtitle="Our main partners and sponsors"
            />
          </div>
          <div className="pl-4 ">
            <div className="borderCs  scroll-auto md:scroll-smooth overflow-x-auto md:overflow-x-hidden pt-5 md:pl-0 md:pr-0 h-24 w-[95%]  md:w-auto flex justify-center ">
              <div className="flex flex-row space-x-[62px] md:space-x-32 w-[100%] md:w-auto pl-[10%] md:pl-0">
                <SponsorCard />
                <SponsorCard />
                <div className="">
                  <SponsorCard />
                </div>
                <div className="">
                  <SponsorCard />
                </div>
                <div className="pr-[10%] md:pr-0">
                  <SponsorCard />
                </div>
              </div>
            </div>
          </div>
          <div id="section-2"></div>
        </div>
      </PagesWrapper>
    </section>
  );
};

export default CompanyPartners;
