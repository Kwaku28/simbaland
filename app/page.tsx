import About from "@/components/About";
import Approach from "@/components/Approach";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileNavbar from "@/components/MobileNav";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col sm:px-10 px-5 overflow-clip">
      <div className="w-full">
        <FloatingNav navItems={navItems} className="hidden md:flex" />
        <MobileNavbar />
        <Hero />
        <About />
        <Ecosystem />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
