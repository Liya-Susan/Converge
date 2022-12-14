import React from 'react'
import home from '../images/home.png'

function About() {
  return (
    
    <h5 style={{display: 'flex',
    justifyContent: 'center',
    paddingBottom:'6%',color:'white',
    alignItems: 'center',flexDirection:'column',height:'60vh',lineHeight:'25px',PaddingTop:'6%',backgroundColor:'#000033'}}>
      <h2 style={{marginBottom:'3%'}}>ABOUT</h2>
      <h4><b>Converge  </b></h4> is a <h5><b>24 hour hackathon</b></h5> by Catalyst  Mar Baselios College of Engineering and Technology  IEDC <div> as a part of Innovators Premier League by Kerala start up mission.</div><div>The winners will be nominated for regional level   hackathon </div> conducted by kerala start up mission.
      <br/>
      <br/>
      <button style={{display: 'inlineBlock',
      margin:'0 auto',
        textDecoration: 'none',
        background: '#0676B8',
        color: 'white',
        padding:'20px',
        cursor: 'pointer',
        border: '3px solid #0676B8 ',
        padding:'10px',
        borderRadius:'20px',
        position:'relative'}}>KNOW MORE</button>
    </h5>
    
  )
}

export default About
