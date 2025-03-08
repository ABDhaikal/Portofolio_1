import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Portofolio from "@/components/Portofolio/Portofolio";
import Skill from "@/components/Skill/Skill";
import Testimonial from "@/components/Testimonial/Testimonial";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Portofolio />
      <AboutMe />
      <Experience />
      <Testimonial />
      
      {/* <EndCard /> */}
    </div>
  );
}
