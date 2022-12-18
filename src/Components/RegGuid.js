import React from 'react'
import imgtwo from '../images/imgtwo.svg'
import imgthree from '../images/imgthree.svg'
import Radium, { StyleRoot } from 'radium';


function RegGuid() {
  const styleone={padding:'9%',color:'white',fontSize:'20px','@media  (max-width:400px)':{
     padding:'3%'
   }}
   const styletwo={margin:'7%',color:'white',fontSize:'20px','@media  (max-width:400px)':{
     
   }}
   const stylethree={marginLeft:'43%',marginTop:'4%','@media  (max-width:400px)':{
    marginLeft:'22%'
  },}
  const style={'@media  (max-width:400px)':{
    fontSize:'17px'
   }}
  return (
    <div id='regguid'>
    <div style={{backgroundColor:'#000033',color:'white',padding:'1%'}}>
    <h3 style={stylethree}>GUIDELINES</h3>
    <div style={styleone} className="d-sm-flex align-items-center justify-content-between" >
      
        
        <img src={imgtwo}  className="img-fluid w-50 d-none d-sm-block" style={{}}></img>
        <div >
      <div style={style}>
      1. The winners will be nominated for regional level hackathon conducted by Kerala Startup Mission.
      </div>
      <br></br>
      <div style={style}>
      2. All the submissions and evaluations shall be in English 
      </div>
      <br></br>

      <div style={style}>
      3. The participants are expected to develop a software prototype or a flow of the system addressing the problem statement that is given
      </div>
      <br></br>

      <div style={style}>
      4.Prototype is not mandatory, but it will be an added advantage during the presentation 
      </div>
   

    

      </div>
      </div>

      <div style={styletwo} className="d-sm-flex align-items-center justify-content-between  " >
        <div>
      <div style={style}>
      5. Mentors will be allocated to each team, details will be further intimated through whatsapp and discord
      </div>
      <br/>

      <div style={style}>
      6. Template for the pitch deck will be provided to you by our team
      </div>
      <br/>

   
      </div>
      <img src={imgthree}  className="img-fluid w-50 d-none d-sm-block m-3"></img>
  </div>
      
  


    </div>
    
     
      
  
      
  


    </div>

  )
}

export default Radium(RegGuid)
