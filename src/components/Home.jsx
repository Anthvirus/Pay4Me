import HeroSection from "./Hero"; 
import AboutSection from "./About";
import PartnerSection from "./Partner";

export default function HomePage() {
      return (
            <>
                  <section className="flex flex-col gap-80 max-w-screen home-style">
                        <HeroSection />
                        <AboutSection />
                        <PartnerSection />
                  </section>
            </>
      )
}