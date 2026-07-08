import React from 'react'
import PortfolioHero from '../components/Portfolio/PortfolioHero'
import PortfolioProjects from '../components/Portfolio/PortfolioProjects'
import FilterButton from '../components/Portfolio/FilterButton'

const Portfolio = () => {
    return (
        <>
            <div className="w-full h-screen bg-[#F9F9F9]">
                <PortfolioHero />
                <PortfolioProjects />
            </div>
        </>
    )
}

export default Portfolio