import React from 'react'
import {AiFillInstagram,AiFillYoutube,AiFillTwitterCircle} from 'react-icons/ai'

function Footer() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'100px'}}>
      <h1 style={{fontSize:'20px',letterSpacing:'6px'}}>@Certified Baddie! 2023.</h1>
      <div style={{display:'flex',gap:'20px'}}>
        <AiFillInstagram style={{fontSize:'40px'}}></AiFillInstagram>
        <AiFillTwitterCircle style={{fontSize:'40px'}}></AiFillTwitterCircle>
        <AiFillYoutube style={{fontSize:'40px'}}></AiFillYoutube>
      </div>
    </div>
  )
}

export default Footer
