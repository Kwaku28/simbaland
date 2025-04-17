import About from "@/components/About";
import Approach from "@/components/Approach";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col sm:px-10 px-5 overflow-clip">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Ecosystem />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
