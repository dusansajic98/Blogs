import React from 'react'
import Image from 'next/image'

function AboutPage() {
  return (
    <div style={{display:'flex',gap:'100px'}}>
      <Image src='/about.png' width={500} height={200}/>
      <div style={{display:'flex',flexDirection:'column',textAlign:'justify',gap:'20px'}}>
        <h1 style={{fontSize:'50px',textTransform:'uppercase'}}>Something About Us</h1>
        <p style={{color:'#999'}}>
          Ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo 
          voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis
          odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere
          repellendus voluptates quia\nratione harum vitae ut.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
