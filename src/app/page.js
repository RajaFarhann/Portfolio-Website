import Hero from "../components/home/hero/hero";
import AboutMe from "@/components/home/aboutMe/aboutMe";
import Skills from "@/components/home/skillSet/skillSet";
import Tools from "@/components/home/tools/tools";

export default function Home() {
  return (
    <div className="relative z-10">
      <Hero />
      <AboutMe />
      <Skills />
      <Tools />
    </div>
  );
}
