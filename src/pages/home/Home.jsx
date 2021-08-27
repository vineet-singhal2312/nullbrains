import React from "react";
import Blogs from "../../components/blog/Blogs";
import ComponyNetwork from "../../components/componyNetwork/ComponyNetwork";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeroHeadingSection from "../../components/hero-heading-section/HeroHeadingSection";
import QualitySection from "../../components/qualitySecton/QualitySectoin";
import TeamSection from "../../components/teamSection/TeamSection";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroHeadingSection />
      <ComponyNetwork />
      <QualitySection />
      <Features />
      <TeamSection />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
