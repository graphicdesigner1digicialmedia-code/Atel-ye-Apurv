import Hero from "../Hero";
import PortfolioFilter from "./PortfolioFilter";

const PortfolioHero = ({
    activeFilter,
    setActiveFilter,
}) => {
    return (
        <Hero
            firstLine="Portfolio"
            secondLine="Architecture"
            paragraph={
                <>
                    We are a design studio specializing in architecture and interiors,
                    redefining the art of spatial storytelling with bold ideas and
                    creative exploration.
                </>
            }
            leftBottomText="Scroll to Explore"
            leftBottomIcon="⌄"
            rightBottomText={
                <PortfolioFilter
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
            }
        />
    );
};

export default PortfolioHero;