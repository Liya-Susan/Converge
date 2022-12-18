import React from 'react'
import img from '../images/img.svg'
import Radium, { StyleRoot } from 'radium';

function RegTerms() {
  const styleone={marginLeft:'45%', marginTop:'9%',marginBottom:'-9%',color:'#000033','@media  (max-width:400px)':{
     marginLeft:'10%',fontSize:'23px'
   },}
   const styletwo={padding:'65px','@media  (max-width:400px)':{
    padding:'34px',
   }}
   const style={'@media  (max-width:400px)':{
    fontSize:'17px'
   }}
  return (
    <div id='regterms' className='text-align-center' >
      <h3  className='text-align-center' style={styleone}>RULES</h3>

    <div  className="d-sm-flex align-items-center justify-content-between " style={styletwo} >

      <div style={{fontSize:'19px'}}>

      <div style={style}>
      1. All communications with your team members,mentors and volunteers must be on discord text and voice channels only
      </div>
      <br/>
      <div style={style}>
      2.You shall submit a report summarizing...before 11:59 pm, 18th December 2022 , Sunday . 
      </div>
      <br/>

      <div style={style}>
      3. Teams that fail to submit their reports before the deadline shall be disqualified and will not be allowed to present
      </div>
      <br/>

      <br/>

      </div>
      
      
      
       
        <img src={img}  className="img-fluid w-50 d-none d-sm-block"></img>
       


    </div>
    </div>
  )
}

export default Radium(RegTerms)
