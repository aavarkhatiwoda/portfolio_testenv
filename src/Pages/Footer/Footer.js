import { Link, animateScroll as scroll } from "react-scroll";
import './Footer.sass'

export default function Footer() {
    return (
      <div className='footer_toplevel'>
  
        <div className='footer'>
  
          <Link activeClass="active" to={'interests_toplevel'} spy={true} smooth={true} duration={500} className='fs3 fc3 link'><b>Aavar Khatiwoda</b></Link>
          <div className='footer_text fs1'>Let's do great things together</div>
          <div className='footer_text footer_text_bottom fs1'>Made with ❤️ with React</div>
  
        </div>
  
      </div>
    )
}