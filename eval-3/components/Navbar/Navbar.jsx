import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
  const router = useRouter()

   const onclick= ()=>{
      back()
   }
  return (
    <div className='navbar'>
      <button onClick={onclick}>go back</button>
      <Link href="/">Home</Link>
      <Link href={"/projects"}>Projects</Link>
    </div>
  )
}

export default Navbar