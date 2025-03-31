import AboutUs from "./sections/AboutUs";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import OurPlans from "./sections/OurPlans";

function App() {
    return (
        <main  className="overflow-hidden">
            <Header />
            <Hero />
            <AboutUs />
            <OurPlans />
        </main>
    );
}

export default App;
