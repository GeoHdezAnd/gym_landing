import AboutUs from "./sections/AboutUs";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import OurPlans from "./sections/OurPlans";
import Faq from "./sections/Faq";
import Reviews from "./sections/Reviews";

function App() {
    return (
        <main className="overflow-hidden">
            <Header />
            <Hero />
            <AboutUs />
            <OurPlans />
            <Faq />
        </main>
    );
}

export default App;
