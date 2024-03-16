import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/skills";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-0">
        <Hero />
        <Projects />
        <Skills />
        <Encryption />
        <Footer />
      </div>
    </main>
  );
}
