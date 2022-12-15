import React from 'react'
import footer from '../images/footer.png'
function Footer() {
  return (
    <div>
      <footer className=" text-white text-center position-relative " style={{backgroundColor:'#000033',overflowX:'Hidden'}}>
        <div >
        <img src={footer} style={{width:'90vw',overflowX:'Hidden'}}></img>

        </div>
    </footer>
    </div>
  )
}

export default Footer
