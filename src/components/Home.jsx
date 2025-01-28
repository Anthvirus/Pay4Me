import HeroSection from "./Hero"; 
import SectionOne from "./SectionOne"; 
import SectionTwo from "./SectionTwo";

export default function HomePage() {
      return (
            <>
                  <section className="flex flex-col gap-72 max-w-screen home-style">
                        <HeroSection />
                        <SectionOne />
                        <SectionTwo />
                  </section>
            </>
      )
}