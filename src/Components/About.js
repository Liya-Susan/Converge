import React from 'react'
import home from '../images/home.png'
import './about.css'
import Radium, { StyleRoot } from 'radium';

function About() {
   const styleone={display: 'flex',
   justifyContent: 'center',
   paddingBottom:'6%',color:'white',
   alignItems: 'center',flexDirection:'column',height:'90vh',lineHeight:'25px',PaddingTop:'6%',backgroundColor:'#000033',lineHeight:'40px',
  '@media  (max-width:400px)':{
   padding:'8%',display: 'flex',PaddingTop:'3%',
   justifyContent: 'center',alignItems: 'center',height:'110vh',textAlign:'center',lineHeight:'27px'
  },
  }

  const styletwo={marginBottom:'3%',marginTop:'7%',
  '@media  (max-width:400px)':{
    padding:'8%',marginBottom:'20px',fontSize:'30px'
   },
}

const style={
  '@media  (max-width:400px)':{
    fontSize:'18px',lineHeight:'30px'
   },
}

   
  return (
    <div id='about' >
    <h5 style={styleone}>
      <h1 style={styletwo}>ABOUT</h1>
      <h4 style={style}>Converge   is a 24 hour hackathon </h4><div style={style}> by Catalyst  Mar Baselios College of Engineering and Technology  IEDC</div> <div style={style}> as a part of Innovators Premier League by Kerala start up mission.</div><div style={style}>The winners will be nominated for regional level   hackathon </div><div style={style}>  conducted by kerala start up mission.</div>
      <br/>
      <br/>
     <a href='https://spice-jupiter-416.notion.site/Converge-73cb3f712a4e4264b5452d5f36d4b0ab'> <button style={{display: 'inlineBlock',
      margin:'0 ',
        textDecoration: 'none',
        background: '#0676B8',
        color: 'white',
        cursor: 'pointer',
        border: '3px solid #0676B8 ',
        padding:'7px ',
        borderRadius:'20px',
        position:'relative'}}>KNOW MORE</button></a>
    </h5>
    </div>
  )
}

export default Radium(About)
