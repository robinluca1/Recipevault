import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ScanDemo } from "./components/ScanDemo";
import { RecipeShowcase } from "./components/RecipeShowcase";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#fffbeb" }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ScanDemo />
        <RecipeShowcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
