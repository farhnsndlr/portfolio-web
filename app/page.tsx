import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="pt-32">
      {/* HERO */}
      <section className="h-screen flex items-start justify-center pt-10">
        <Hero />
      </section>

      {/* ABOUT + SKILLS */}
      <About />

      {/* PROJECTS */}
      <Projects />

      {/* CONTACT */}
      <Contact />
    </main>
  );
}
