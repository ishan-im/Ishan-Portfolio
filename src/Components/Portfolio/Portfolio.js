import React from 'react'
import './Portfolio.css'

import img1 from '../../assests/master-paint.png'
import img2 from '../../assests/gitnode.png'
import img3 from '../../assests/text-emotion.png'

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
                  img={img2}
                  description="gitNode"
                  host='https://github.com/ishan-im/git-Node'
                  liveLink="https://gitnode.tech/"
              />

              <PortfolioItem
                  img={img3}
                  description="master-paint"
                  host='https://github.com/ishan-im/Master-Paint'
                  liveLink="https://masterpaint.netlify.app/"
              />


      </div>
    </section>
  );
}

export default Portfolio