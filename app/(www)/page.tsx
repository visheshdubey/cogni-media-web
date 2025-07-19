import { SectionHeroCarousel } from "./_comps/SectionHeroCarousel";
import SectionAboutUs from "./_comps/SectionAboutUs";
import SectionServices from "./_comps/SectionServices";

export default function Home() {
    return (
        <main>
            <SectionHeroCarousel />
            <SectionAboutUs />
            <SectionServices />
        </main>
    );
}
