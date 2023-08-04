import React from "react";
import './Carousel.sass';
import './Skills.sass';

export const CarouselCards = ({ i, width }) => {
    return (
      <div className="carousel_cards_toplevel" style={{ width: width }}>
  
        <a href={i.link} target='_blank' rel='noopener noreferrer' className='carousel_cards fc2'>
            <div className='carousel_cards_text fs1'>
              <b className='fs2'>{i.name}&ensp;➔</b><hr/>
              <div className='skills_toplevel'>
                {i.technologies.map(j => (
                  <a className='skills'>{j}</a>
                ))}
              </div>
              {i.description}
              {i.content.map(j => (
                <li className='carousel_cards_bp fs1'>{j}</li>
              ))}
            </div>
        </a>
  
      </div>
    )
}