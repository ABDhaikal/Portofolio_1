import AboutMe from "@/components/AboutMe/AboutMe";
import EndCard from "@/components/EndCard/EndCard";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Portofolio from "@/components/Portofolio/Portofolio";
import Skill from "@/components/Skill/Skill";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Portofolio />
      <AboutMe />
      <EndCard />
    </div>
  );
}
