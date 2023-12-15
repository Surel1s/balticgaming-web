import FooterSection from "@/components/HomeSection/Footer";
import Head from "next/head";
import GameServers from "@/components/HomeSection/GameServers";
import CompanyPartners from "@/components/HomeSection/CompanyPartners";
import ProvideRoad from "@/components/HomeSection/ProvideRoad";
import DiscordLink from "@/components/HomeSection/DiscordLink";
import SectionSeparator from "@/components/SectionSeparator";
import Header from "@/components/Header";
import SideBarNavs from "@/components/SideBar";
import ConnectEngage from "@/components/ConnectEngage";
import MainSection from "@/components/HomeSection/MainSection";
import RoadMap from "@/components/HomeSection/RoadMap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Baltic gaming web</title>
        <meta name="description" content="Baltic gamingg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <div className="bg-none right-0 h-screen scrollbar-thin overflow-y-scroll overflow-x-hidden">
          <SideBarNavs />
          <>
            <Header />
            <MainSection />
            <SectionSeparator id="sponsors" text="Company" />
            <CompanyPartners />
            <ProvideRoad />
            <RoadMap />
            <SectionSeparator id="discord" text="Gaming" />
            <DiscordLink />
            <GameServers />
            <ConnectEngage />
            <FooterSection />
          </>
        </div>
      </div>
    </>
  );
}
