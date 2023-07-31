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
        {name:'WORK EXPERIENCE', id:'#work'},
        {name:'TECHNICAL PROJECTS',id:'#projects'},
        {name:'TEACHING INVOLVEMENTS',id:'#teaching'},
      ];
      return (
        <div className='introduction_grid1_links_toplevel'>
            <div className='newline' />
            <div className='newline' />
            <div>
                {menulinkslist.map(item => (
                    <ul><li><a className='introduction_grid1_links fs1 fc3' href={item.id} style={{fontWeight:'bold'}}>{item.name}</a></li></ul>
                ))}
            </div>
        </div>
      )
  }