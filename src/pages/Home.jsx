import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import HomeHero from "../components/Home/HomeHero";
import AwardsAnimation from "./AwardsAnimation";
import ImageSlider from "../components/Home/ImageSlider";
import Paragraph from "../components/Home/Paragraph";
import Button from "../components/Button";
import Sample from "../components/Home/Sample";
import Work from "../components/Home/Work";
import Info from "../components/Home/Info";
import ShortParagraph from "../components/Home/ShortParagraph";
import StretchText from "../components/Home/StretchText";

const Home = () => {
    return (
        <>
            <Header />
            <HomeHero />
            <ImageSlider />
            <Paragraph />
            <Button />
            <Work />
            <Info />
            <ShortParagraph />
            <StretchText />
        </>
    );
};

export default Home;