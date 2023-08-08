import React, { useState } from "react";
import '../../Components/Carousel.sass'
import { CarouselCards } from '../../Components/CarouselCards.jsx';




export const ProjectsCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const c = [
        {
            name:'Personal SWE Portfolio Website',
            technologies:['ReactJS','JSX','Sass'],
            description:'Continuous Development',
            link:'https://github.com/aavarkhatiwoda/portfolio',
            content:[
                '• Self-taught React [3+ years] and developed software engineer portfolio website\
                to highlight skills, work history, and projects.',
                '• Utilized Sass variables and mapping of key-value objects and lists toward\
                creating a readable and scalable environment.',
                '• Designed for mobile to 4k-resolution displays, emphasizing high-quality user\
                interface and user experience.',
            ],
        },
        {
            name:'Very Articulated Recreational Service [V.A.R.S.]',
            technologies:['Python','Google Speech Recognition','BeautifulSoup4'],
            description:'In Progress',
            link:'https://github.com/aavarkhatiwoda/vars',
            content:[
                '• Utilized Google Speech Recognition Python library to develop J.A.R.V.I.S.-like\
                voice assistant to return desired information or go to URLs through web scraping capabilities.'
            ]
        },
        {
            name:'Bomb Lab',
            technologies:['C','GDB','Assembly'],
            description:'School Assignment [CS 2505], score of 100/100',
            link:'https://cs.vt.edu',
            content:[
                '• Completed Bomb Lab assignment in CS 2505 course [C / Assembly] that required careful observation and navigation of Assembly code in order\
                to successfully diffuse bomb through the completion of 6 phases.',
                '• Utilized objdump to extract executable contents into Assembly code, written to a text file for analysis. Navigated through text file of\
                Assembly objdump code to figure out process by which to solve each required phase.',
                '• Utilized necessary commands to track program execution and memory location contents to discover solutions.',
                '• Was one of 28 students, out of 53, to successfully complete the required 6 phases. Completed with 0 bomb detonations and\
                received a perfect score.',
            ]

        },
        {
            name:'Apple Music Terminal Music Finder',
            technologies:['Python','Apple Music [Mac]'],
            description:'Complete',
            link:'https://github.com/aavarkhatiwoda/python/blob/main/musicFinder.py',
            content:[
                '• Created terminal program to search downloaded artist libraries to find potential song\
                matches through string matching and play the intended song after user selection.',
                '• Incorporated handling of special characters in the input.',
            ],
        },
        {
            name:'Recursive Sudoku Solver Visualizer',
            technologies:['Python','PyGame'],
            description:'Complete',
            link:'https://github.com/aavarkhatiwoda/python/blob/main/sudokuSolver.py',
            content:[
                '• Developed backtracking sudoku application with solving process shown through the\
                graphical user interface.',
                '• Implemented handling of unsolvable grids.',
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