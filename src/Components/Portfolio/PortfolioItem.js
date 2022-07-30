import React from 'react'

import './PortfolioItem.css'

function PortfolioItem(props) {
  return (
    <article className="portfolio__item">
                <div className="portfolio__item-image">
               
                    <img src={props.img} alt={props.description} className="portfolio__item-image"/>

                    </div>

                   <h3>{props.description}</h3> 
                   <div className="portfolio__item-cta">
                       <a href={props.host} className='btn' target='#blank'>Github</a>
                       <a href={props.liveLink} className='btn btn-primary' target='#blank'>Live Demo</a>
                   </div>   
            </article>
  )
}

export default PortfolioItem