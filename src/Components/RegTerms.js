import React from 'react'
import img from '../images/img.svg'
import Radium, { StyleRoot } from 'radium';

function RegTerms() {
  const styleone={marginLeft:'39%', marginTop:'9%',marginBottom:'2%',color:'#000033','@media  (max-width:400px)':{
     marginLeft:'10%'
   },}
   const styletwo={'@media  (max-width:400px)':{
    fontSize:'10px'
   }}
  return (
    <div id='regterms' className='text-align-center' >
      <h3  className='text-align-center' style={styleone}>REGISTRATION TERMS</h3>

    <div  className="d-sm-flex align-items-center justify-content-between p-5" style={styletwo} >

      <div style={{fontSize:'19px'}}>

      <div>
      1. The participating teams should be students of mar baselios college of engineering who are currently studying.
      </div>
      <br/>
      <div>
      2. The team size should be between 2 and 4 people.
      </div>
      <br/>

      <div>
      3. Participants must complete all sections of the template on the competition website<br/>
(a)	For teams that register: Team name; Email Address; Phone number; challenge.<br/>
(b)	For team members: Name and surname; department , e-mail address, mobile number

      </div>
      <br/>

      <div>
      4. The language of the competition is English. All submissions, evaluation will be in English.
      </div>
      <br/>

      <div>
      5. The organizer reserves the right to examine the applications received and will announce the selected teams to enter the actual competition.


      </div>
      <br/>

      </div>
      
      
      
       
        <img src={img}  className="img-fluid w-50 d-none d-sm-block"></img>
       


    </div>
    </div>
  )
}

export default Radium(RegTerms)
