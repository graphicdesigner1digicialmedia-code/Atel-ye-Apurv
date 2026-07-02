import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import AwardsAnimation from "./AwardsAnimation";
import ImageSlider from "../components/Home/ImageSlider";
import Paragraph from "../components/Home/Paragraph";
import Button from "../components/Button";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <ImageSlider />
            <Paragraph />
            <Button />
        </>
    );
};

export default Home;