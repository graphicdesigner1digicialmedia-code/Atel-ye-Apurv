import Hero from "../Hero";

const PortfolioHero = () => {
    return (
        <Hero
            firstLine="Portfolio"
            secondLine="Architecture"
            paragraph={
                <>We are a design studio specializing in architecture and interiors, redefining the art of <br /> spatial storytelling with bold ideas and creative exploration.</>
            }
            leftBottomText="Scroll to Explore"
            leftBottomIcon="⌄"
        />
    );
};

export default PortfolioHero;