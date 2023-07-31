'use client'

import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact(){
    const router = useRouter()
    const [change,setChange] = useState({
        name:'',
        email:'',
        msg:'',
    })

    const handleContact = (e) => {
        e.preventDefault()

        router.push('/')
    }

    console.log(change)

    return(
        <div style={{display:'flex',gap:'200px',justifyContent:'center',alignItems:'center'}}>
            <h1 style={{fontSize:'50px',fontWeight:'bold',textTransform:'uppercase',letterSpacing:'10px'}}>Contact Us!</h1>

            <ContactForm
                handleSubmit={handleContact}
                change={change}
                setChange={setChange}
            />
        </div>
    )
}