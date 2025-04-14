import AboutUs from "./sections/AboutUs";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import OurPlans from "./sections/OurPlans";
import Faq from "./sections/Faq";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

function App() {
    return (
        <main className="overflow-hidden">
            <Header />
            <Hero />
            <AboutUs />
            <OurPlans />
            <Faq />
            <Testimonials />
            <Footer />
        </main>
    );
}

export default App;
