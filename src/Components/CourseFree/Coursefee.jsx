import React from 'react'
import cross from '../Assets/cross.jpg'
import './coursefree.css'
const Coursefee = () => {
  return (
    <div className='courseFee'>
    <p>Btech</p>
    <p>1 st Year</p>
    <div className='collegewrap'>
        <img className='collegeLogo' src={cross} alt='' />
        <p>Compare Fees</p>
    </div>
      
    </div>
  )
}

export default Coursefee
