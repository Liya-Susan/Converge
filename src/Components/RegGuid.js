import React from 'react'
import imgtwo from '../images/imgtwo.svg'
import imgthree from '../images/imgthree.svg'
import Radium, { StyleRoot } from 'radium';


function RegGuid() {
  const styleone={padding:'5%',color:'white',fontSize:'20px','@media  (max-width:400px)':{
    
   }}
   const styletwo={padding:'3%',color:'white',fontSize:'20px','@media  (max-width:400px)':{
     
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
      1. The participants should be students of Mar Baselios College of Engineering and Technology.
      </div>
      <br></br>
      <div style={style}>
      2. The team should have a minimum of 2 and a maximum of 4 participants.
      </div>
      <br></br>

      <div style={style}>
      3. During registration, the team should upload a video recording consisting of outline of solution for problem statement which will be evaluated as the primary screening.
      </div>
      <br></br>

      <div style={style}>
      4. Teams will be selected and announced through online for participating in hackaton.
      </div>
      <br></br>

      <div style={style}>
      5. The selected teams has to give prior conformation to participate in hackaton.
      </div>
      
      <br/>
      <div style={style}>
      6. The hackaton will be hybrid mode as mentioned in the schedule.
      </div>
      <br/>

      <div style={style}>
      7. The first level of scrutinizing of applications by a expert panel by analyzing the video uploaded by the team members.
      </div>
      <br/>

      </div>
      </div>

      <div style={styletwo} className="d-sm-flex align-items-center justify-content-between p-3 " >
        <div>
      <div style={style}>
      8. Delineate will be conducted in hybrid more ie hackton will be online and final presentation will be offline.
      </div>
      <br/>

      <div style={style}>
      9. The problem statements will be different for first level screening and hackaton.
      </div>
      <br/>

      <div style={style}>
      10. The mentors will be in touch with the teams so that they can get more ideas.
      </div>
      <br/>

      <div style={style}>
      11. The judges will evaluate the solutions prepared by the teams and winners will be announced and winners will be announced. 
      </div>
      <br/>

      <div style={style}>
      12. The first  three winners will be nominated to regional level hackaton which will be conducted by kerala start up mission 
      </div>
      <br/>

      <div style={style}>
      13. The judgement by experts/judges will be final. No queries will be entertained.
      </div>
      <br/>

      <div style={style}>
      14. The organizing committee will have the right to add/update rules as needed.
      </div>
      </div>
      <img src={imgthree}  className="img-fluid w-50 d-none d-sm-block"></img>
  </div>
      
  


    </div>
    
     
      
  
      
  


    </div>

  )
}

export default Radium(RegGuid)
