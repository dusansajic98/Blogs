'use client'

import Link from "next/link";
import Image from "next/image";
import {signIn,signOut,getProviders,useSession} from 'next-auth/react'
import { useEffect, useState } from "react";

export default function Navbar(){

    const {data:session} = useSession()
    const [providers,setProviders] = useState(null)

    useEffect(() => {
        const getProvs = async () => {
            const res = await getProviders()
            setProviders(res)
        }
        getProvs()
    },[])

    return(
        <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'transparent'}}>
            <Link
            style={{display:'flex',alignItems:'end',gap:'20px'}}
            href='/'>
                <Image src='/house.png' width={60} height={60} alt='' />
                <p style={{fontSize:'20px',color:'#999',fontWeight:'bold',letterSpacing:'10px'}}>Blogtopia</p>
            </Link>
            <div style={{display:'flex',gap:'30px'}}>
                <Link style={{fontSize:'18px',color:'#888'}} href='/'>Home</Link>
                <Link style={{fontSize:'18px',color:'#888'}} href='/blogs'>Blogs</Link>
                <Link style={{fontSize:'18px',color:'#888'}} href='/about'>About</Link>
                <Link style={{fontSize:'18px',color:'#888'}} href='/contact'>Contact</Link>

                {session?.user ? (
                    <div style={{display:'flex',gap:'30px'}}>
                        <Link style={{fontSize:'18px',color:'#888'}} href='/profile'>Profile</Link>
                        <button
                            style={{color:'red',textTransform:'uppercase'}}
                        onClick={signOut}>Sign Out</button>
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map(provider => (
                            <button style={{
                                color:'lightgreen',
                                fontWeight:'bold',
                                fontSize:'18px',
                                textTransform:'uppercase'
                            }} onClick={() => signIn(provider.id)} key={provider.id}>Sign In</button>
                        ))}
                    </>
                )}
            </div>
        </nav>
    )
}