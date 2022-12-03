import React from 'react'
import home from '../images/home.png'

function About() {
  return (
    <h5 style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',flexDirection:'column',height:'100vh',lineHeight:'25px',}}>
      
      <h4><b>Delinate </b></h4> is a <h5><b>24 hour hackathon</b></h5> by Catalyst  Mar Baselios College of Engineering and Technology  IEDC <div> as a part of Innovators Premier League by Kerala start up mission.</div><div>The winners will be nominated for regional level   hackathon </div> conducted by kerala start up mission.
      <br/>
      <br/>
      <button style={{display: 'inlineBlock',
      margin:'0 auto',
        textDecoration: 'none',
        background: 'red',
        color: 'white',
        padding:'20px',
        cursor: 'pointer',
        border: '3px solid ',
        padding:'10px',
        borderRadius:'20px',
        position:'relative'}}>Register Now</button>
    </h5>
    
  )
}

export default About
