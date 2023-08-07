import './Interests.sass'
import '../../Components/Skills.sass'
import Resume from '../../Components/Images/aavar_swe_resume_aug2023.pdf';

export default function Interests() {
    return (
        <div className='interests_toplevel'>
          <div className='interests'>

            {/* LEAVE interests_grid1 BLANK AS IT WILL NOT BE USED */}
            <div className='interests_grid1' />

            <div className='interests_grid2'>
              <div className='interests_grid2_text fs2 fc2'>
                Nice to meet you! I'm a university student at <a href={'https://cs.vt.edu'} target='_blank' rel='noopener noreferrer' className='link fc2 fc3'><b>Virginia Tech</b></a> pursuing
                a bachelor's degree in computer science and a minor in mathematics. I am constantly looking for
                new ways to improve my skills as a developer.
                <div className='newline' />
                My main interests are in backend software engineering, machine learning, and neural
                networks with Python and Java. I also enjoy developing websites using React.
                I love being able to use my skills to achieve real-world
                results, either by myself or with a team.
                <div className='newline' />
                I was a Software Engineer Intern at <a href={'https://www.northropgrumman.com'} target='_blank' rel='noopener noreferrer' className='link fc2 fc3'><b>Northrop Grumman</b></a> during Summer 2023.
                <div className='newline' />
                I'm passionate about teaching, especially in being able to explain
                difficult concepts as simply as possible in layman's terms.
                My interests in teaching have led me to become a Python instructor and
                a math tutor, where I have taught more than 50 students from Oct 2019
                to Jun 2021. I would love to be able to apply my teaching and
                communication skills to help my team tackle challenging problems
                with a clear direction in mind.
                <div className='newline' />
                <b className='fs1'>TECHNOLOGIES I AM FAMILIAR WITH:</b>
                <div className='newline_small' />
                <ShowSkills />
                <div className='newline_small' />
                <b className='fs1'>CONTACT AND SOCIALS:</b>
                <div className='newline_small' />
                <ShowSocials />
              </div>
            </div>

          </div>
        </div>
    )
}

function ShowSkills() {
    const s = ['Python', 'Java', 'C',  'C++', 'JavaScript', 'Assembly', 'React', 'JSX',
    'Sass', 'HTML', 'CSS', 'Terminal', 'Linux', 'macOS', 'Virtual Servers'];
    return (
      <div className='skills_toplevel'>
        {s.map(i => (
          <a className='skills fs1'>{i}</a>
        ))}
      </div>
    )
}

function ShowSocials() {
    const s = [
      {name: 'Résumé', link: Resume},
      {name: 'GitHub', link: 'https://www.github.com/aavarkhatiwoda'},
      {name: 'LinkedIn', link: 'https://linkedin.com/in/aavarkhatiwoda'}
    ];
    return (
      <div className='skills_toplevel'>
        {s.map(i => (
          <a className='skills fs1' href={i.link} target='_blank' rel='noopener noreferrer'>{i.name}</a>
        ))}
      </div>
    )

}