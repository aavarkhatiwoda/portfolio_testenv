import React, { useState } from "react";
import { CarouselCards } from '../../Components/CarouselCards.jsx';



export const WorkCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const c = [
        {
            name:'Northrop Grumman',
            technologies:['Python', 'Jenkins', 'Groovy / Jenkinsfile Scripts', 'Docker', 'OpenSearch [Suite]', 'Grafana'],
            description:'Software Engineer Intern, Jun 2023 - Aug 2023',
            link:'https://www.northropgrumman.com',
            content:[
                '• Identified collection requirements and developed Python scripts to efficiently retrieve Jenkins pipeline data toward end goal of monitoring project health and anticipating build failures.',
                '• Optimized collection scripts to retrieve data more efficiently by +30% rate increases of previous iterations.',
                '• Designed Jenkinsfile sequence diagram to document anticipated flow of data collection and transfer to OpenSearch, creating detailed documentation of script tasks and API calls.',
                '• Utilized Groovy / Jenkinsfile scripts within Docker to automate data collection and transfer to OpenSearch.',
                '• Aided team in expanding data visualization capabilities through filters with OpenSearch Dashboards.',
                '• Spearheaded planning of weekly tasks of team of 4 through serving as team’s scrum master.'
            ],
        },
      ];

      const updateIndex = (newIndex) => {
        newIndex = newIndex % (c.length);
        if (newIndex < 0) {
          newIndex = c.length - 1;
        }
        setActiveIndex(newIndex);
      };

    return (
        <div className='carousel_toplevel'>

            <div className="carousel" style={{ transform: `translate(-${activeIndex * 100}%)`}}>
                {c.map((i) => {
                    return <CarouselCards i={i} width={"100%"} />;
                })}
            </div>

            {/*
            <div className="carousel_buttons">
                <button className="carousel_buttons_arrow" onClick={() => { updateIndex(activeIndex - 1); }}>
                    <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
                </button>

                <div className="carousel_buttons_dots">
                    {c.map((i, index) => {
                        return (
                            <button className="carousel_buttons_dots_b" onClick={() => { updateIndex(index); }}>
                                <span className={`material-symbols-outlined
                                    ${index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
                                    radio_button_checked
                                </span>
                            </button>
                        );
                    })}
                </div>

                <button className="carousel_buttons_arrow" onClick={() => { updateIndex(activeIndex + 1); }}>
                    <span class="material-symbols-outlined">arrow_forward_ios</span>{" "}
                </button>
            </div>
            */}

        </div>

    )
}