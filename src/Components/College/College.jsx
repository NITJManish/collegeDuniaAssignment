import React from 'react'
import './college.css'
import arrow_img from '../Assets/arrow1.jpg'
import download from '../Assets/download1.png'
import collegelog from '../Assets/collegelogo.png'
const College = () => {
  return (
    <div className='college'>
    <div className='collegewrap'>
    <img className='collegeImg' src={collegelog} alt="" />
    <p>NIT Jalandhar</p>
    </div>
      <div className='location'>
        <span>Location and state &nbsp; </span><span>| Approved by AICTE</span>
      </div>
      <div className='middlepart'>
        <p>Btech computer science and engineering ^</p>
        <p>JEE Advance 2024 cutoff: 144</p>
      </div>
      <div className='buttonpart'>
      <div className='buttonpart1'>
      <img className='buttonImg' src={arrow_img} alt='' width="10px" height="10px" />
      <button>Apply Now</button>
      </div>
      <div className='buttonpart2'>
        <img className='buttonImg' src={download} alt='' />
        <button>Download Brochure</button>
      </div>
      <div className='buttonpart3'>
        <input type="checkbox" />
        <p>Add to compare</p>
      </div>
      </div>
    </div>
  )
}

export default College
