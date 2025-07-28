import { SectionHeroCarousel } from "./_comps/SectionHeroCarousel";
import SectionAboutUs from "./_comps/SectionAboutUs";
import SectionServices from "./_comps/SectionServices";
import SectionIndustries from "./_comps/SectionIndustries";
import SectionWhyChooseUs from "./_comps/SectionWhyChooseUs";
import SectionGetInTouch from "./_comps/SectionGetInTouch";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center">
            <SectionHeroCarousel />
            <SectionAboutUs />
            <SectionServices />
            <SectionIndustries />
            <SectionWhyChooseUs />
            <SectionGetInTouch />
        </main>
    );
}
