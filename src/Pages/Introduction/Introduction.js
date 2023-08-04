import { Link, animateScroll as scroll } from "react-scroll";
import './Introduction.sass'

export default function Introduction() {
    return (
        <div className='introduction_toplevel'>

            <div className='introduction'>

                <div className='introduction_grid1'>

                    <div className='introduction_grid1_text fs3' style={{fontWeight:'bold'}}>Aavar Khatiwoda</div>
                    <div className='introduction_grid1_text fs2'>Computer Science student</div>
                    <div className='introduction_grid1_text fs1 fc3'>and machine learning enthusiast</div>
                    <ShowMenuLinks />

                    {/*
                    <div className='introduction_grid1_textdiv'>
                        <div className='introduction_grid1_text fs4' style={{fontWeight:'bold'}}>Aavar Khatiwoda</div>
                        <div className='introduction_grid1_text fs3'>Computer Science student</div>
                        <div className='introduction_grid1_text fs2 fc3'>and machine learning enthusiast</div>
                        <ShowMenuLinks />
                    </div>
                    */}
                </div>

                {/* LEAVE introduction_grid2 BLANK AS IT WILL NOT BE USED */}
                <div className='introduction_grid2' />

            </div>

        </div>
    )
}

function ShowMenuLinks() {
    const menulinkslist = [
        {name:'HOME',id:'interests_toplevel'},
        {name:'PROFESSIONAL HISTORY',id:'work_toplevel'},
        {name:'TECHNICAL PROJECTS',id:'projects_toplevel'},
        {name:'TEACHING HISTORY',id:'teaching_toplevel'},
      ];
      return (
        <div className='introduction_grid1_links_toplevel'>
            <div className='newline' />
            <div className='newline' />
            <div>
                {menulinkslist.map(item => (
                    <ul><li className='introduction_grid1_links fs1 fc3'>
                        <Link activeClass="active" to={item.id} spy={true} smooth={true} duration={500}>
                            <b>{item.name}</b>
                        </Link></li></ul>
                ))}
            </div>
        </div>
    )
}