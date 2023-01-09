import { useRouter } from 'next/router'
import React from 'react'

const Page = ({details}) => {
    const router = useRouter()

  return (
    <div>
        <h3 onClick={()=>router.back()}>Go Back</h3>
        <h2>{details.fullname}</h2>
    </div>
  )
}

export default Page

export async function getStaticPaths(){
    let res = await fetch("http://localhost:8080/item")
    let data = await res.json()
    return{
        paths:data.map((project)=> ({params: {id: String(project.id)}})),
        fallback:false
    }
}

export async function getStaticProps(context){
    let id= params.context.id
    let res = await fetch(`http://localhost:8080/items/${id}`)
    let data = await res.json()
     return{
        props:{
            details:data
        }
     }
}