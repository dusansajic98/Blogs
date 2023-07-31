'use client'

import Link from 'next/link'
import React,{useState,useEffect} from 'react'

function BlogPage() {

  const [blogs,setBlogs] = useState([])

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const json = await res.json()
      setBlogs(json)
    }
    dataFetch()
  },[])

  return (
    <div>
      {blogs.map(blog => (
        <Link href={`/blogs/${blog.id}`}
        style={{display:'flex',gap:'20px',margin:'3rem auto'}}
         key={blog.id}>
          <h1 style={{fontSize:'20px',fontWeight:'bold',textDecoration:'underline'}}>{blog.id}.</h1>
          <div>
            <h2 style={{fontWeight:'600',textTransform:'uppercase'}}>{blog.title}</h2>
            <p style={{color:'#888'}}>{blog.body}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogPage
