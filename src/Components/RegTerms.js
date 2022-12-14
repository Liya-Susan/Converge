import React from 'react'
import img from '../images/img.svg'
function RegTerms() {
  return (
    <div>
    <div  className="d-sm-flex align-items-center justify-content-between  p-5" style={{backgroundColor:'#000033',color:'white'}}>
     
      <div >
      <h3>REGISTRATION TERMS</h3>
      <div>
      1. The participating teams should be students of mar baselios college of engineering who are currently studying.
      </div>
      <div>
      2. The team size should be between 2 and 4 people.
      </div>
      <div>
      3. Participants must complete all sections of the template on the competition website<br/>
(a)	For teams that register: Team name; Email Address; Phone number; challenge.<br/>
(b)	For team members: Name and surname; department , e-mail address, mobile number

      </div>
      <div>
      4. The language of the competition is English. All submissions, evaluation will be in English.
      </div>
      <div>
      5. The organizer reserves the right to examine the applications received and will announce the selected teams to enter the actual competition.


      </div>

      </div>
      
      
      
       
        <img src={img}  className="img-fluid w-50 d-none d-sm-block"></img>
       


    </div>
    </div>
  )
}

export default RegTerms
