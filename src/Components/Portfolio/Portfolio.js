import React from 'react'
import './Portfolio.css'

import img1 from '../../assests/portfolio1.jpg'

import PortfolioItem from './PortfolioItem'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

              <PortfolioItem
                  img={img1}
                  description="text emotion"
                  host='https://github.com/ishan-im/text-editor'
                  liveLink="https://textemotion.netlify.app/"
              />

              <PortfolioItem
                  img={img1}
                  description="gitNode"
                  host='https://github.com/ishan-im/git-Node'
                  liveLink="https://gitnode.tech/"
              />

              <PortfolioItem
                  img={img1}
                  description="portfolio-image"
                  host='github.com'
                  liveLink="github.com"
              />


      </div>
    </section>
  );
}

export default Portfolio