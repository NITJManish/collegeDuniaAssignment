import React from 'react'
import cross from '../Assets/cross.jpg'
import './placement.css'
const Placement = () => {
  return (
    <div className='courseFee'>
    <p>Avg Package</p>
    <p>Highest packege</p>
    <p>300000</p>
    <div className='collegewrap'>
        <img className='collegeLogo' src={cross} alt='' />
        <p>Compare placement</p>
    </div>
      
    </div>
  )
}

export default Placement
