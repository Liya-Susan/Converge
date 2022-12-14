import React from 'react'

function ProgStruct() {
  return (
    <div  style={{margin:'9.5%'}}>
      <h3>Program Schedule</h3>
      <br/>
      <table className="table table-bordered table-striped table-dark " style={{backgroundColor:'#000033'}}>
  <thead>
    <tr>
      <th scope="col">Sl No</th>
      <th scope="col">Steps</th>
      <th scope="col">Start Date</th>
      <th scope="col">Closing Date</th>
      <th scope="col">Location</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>	Application registration</td><td>	3/12/2022</td><td>		8/12/2022</td>	<td>Online</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>	Evaluation applications</td>  <td>	9/12/2022	</td> <td>12/12/2022	</td> <td>Online</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Announcing the teams</td>
      <td>12/12/2022</td>
      <td>12/12/2022</td>
      <td>Online</td>
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>Start hackathon</td>
      <td>16/12/2022</td>
      <td>17/12/2022</td>
      <td>Online</td>

    </tr>
    <tr>
    <th scope="row">5</th>
      <td>Mentoring teams</td>
      <td>16/12/2022</td>
      <td>17/12/2022</td>
      <td>Online</td>

    </tr>
    <tr>
    <th scope="row">6</th>
      <td>Presentation of projects</td>
      <td>17/12/2022</td>
      <td>17/12/2022</td>
      <td>Offline</td>

    </tr>
    <tr>
    <th scope="row">7</th>
      <td>Announcing Winners</td>
      <td>19/12/2022</td>
      <td>19/12/2022</td>
      <td>Offline</td>

    </tr>
    
  </tbody>
</table>
    </div>
  )
}

export default ProgStruct
