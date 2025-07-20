import { SectionHeroCarousel } from "./_comps/SectionHeroCarousel";
import SectionAboutUs from "./_comps/SectionAboutUs";
import SectionServices from "./_comps/SectionServices";
import SectionIndustries from "./_comps/SectionIndustries";

export default function Home() {
    return (
        <main>
            <SectionHeroCarousel />
            <SectionAboutUs />
            <SectionServices />
            <SectionIndustries />
        </main>
    );
}
