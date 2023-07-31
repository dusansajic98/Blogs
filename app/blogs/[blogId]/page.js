'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";

const SingleBlogPage = ({params}) => {

    const eachBlogId = params.blogId

    const [eachBlog,setEachBlog] = useState({})

    useEffect(() => {
        const dataFetch = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${eachBlogId}`)
            const json = await res.json()
            setEachBlog(json)
        }
        
        dataFetch()
    },[eachBlogId])

    return(
        <div style={{display:'flex',flexDirection:'column',gap:'50px',alignItems:'center',padding:'2rem'}}>
            <div>
                <h1 style={{fontSize:'50px',fontWeight:'bold',color:"gray",textDecoration:'underline'}}>Blog number {eachBlog.id}.</h1>
            </div>
            <div style={{alignItems:'center',display:'flex',flexDirection:'column',gap:'50px'}}>
                <h1 style={{fontSize:'30px',fontWeight:'bold',textTransform:'uppercase',fontStyle:'italic'}}>{eachBlog.title}</h1>
                <p style={{color:'#888',letterSpacing:'2px'}}>{eachBlog.body}.</p>
                <Image src='/blog.png' width={700} height={100} style={{borderRadius:'30px',opacity:'.8'}} />
            </div>
        </div>
    )
}

export default SingleBlogPage