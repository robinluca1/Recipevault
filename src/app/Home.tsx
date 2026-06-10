import { Navbar } from "./components/Navbar.tsx";
import { Hero } from "./components/Hero.tsx";
import { Features } from "./components/Features.tsx";
import { ScanDemo } from "./components/ScanDemo.tsx";
import { RecipeShowcase } from "./components/RecipeShowcase.tsx";
import { Testimonials } from "./components/Testimonials.tsx";
import { CTA } from "./components/CTA.tsx";
import { Footer } from "./components/Footer.tsx";

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