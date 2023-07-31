import React from 'react'
import Link from 'next/link'

function ContactForm({change,setChange,handleSubmit}) {
  return (
    <div>
            <form onSubmit={handleSubmit}
                style={{display:'flex',flexDirection:'column',maxWidth:'500px'}}
            >
                <label style={{marginBottom:'5px'}} htmlFor='name'>Name: </label>
                <input onChange={(e) => setChange({...change,name:e.target.value})}
                value={change.name}
                style={{outline:'none',
                color:'white',
                padding:'.5rem',
                backgroundColor:'transparent',
                border:'none',
                borderBottom:'2px solid white',
                marginBottom:'30px'}} id='name' type='text' placeholder="Enter your Name..." required/>

                <label style={{marginBottom:'5px'}} htmlFor='email'>Email: </label>
                <input onChange={(e) => setChange({...change, email:e.target.value})}
                value={change.email}
                style={{outline:'none',
                color:'white',
                padding:'.5rem',
                backgroundColor:'transparent',
                border:'none',
                borderBottom:'2px solid white',
                marginBottom:'30px'}} id='email' type='email' placeholder="Enter your e-mail" required/>

                <label style={{marginBottom:'5px'}} htmlFor='msg'>Your Message: </label>
                <textarea onChange={(e) => setChange({...change, msg:e.target.value})}
                value={change.msg}
                style={{outline:'none',
                backgroundColor:'transparent',
                border:'none',
                borderBottom:'2px solid white',
                borderRight:'3px dotted #999',
                borderLeft:'3px dotted #999',
                padding:'.5rem'
                }}
                id='msg' cols='50' rows='10' required placeholder="Whats on your mind?" />
                <div style={{display:'flex',gap:'50px',justifyContent:'flex-end',margin:'1rem 0',alignItems:'center'}}>
                    <Link style={{color:'orange',fontSize:'20px'}} href='/'>Cancel</Link>
                    <button 
                    style={{backgroundColor:'white',
                    color:'black',
                    borderRadius:'50px',

                    padding:'.2rem 1rem',
                    fontSize:'20px'}}>
                        Send
                    </button>
                </div>
            </form>
    </div>
  )
}

export default ContactForm
