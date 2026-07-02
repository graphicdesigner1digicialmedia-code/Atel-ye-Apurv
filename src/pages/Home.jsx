import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import AwardsAnimation from "./AwardsAnimation";
import ImageSlider from "../components/Home/ImageSlider";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <ImageSlider />
        </>
    );
};

export default Home;