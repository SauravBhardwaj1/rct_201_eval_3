
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Projects = () => {
    const [data, setData] = useState([])

    // console.log("details", details)

    const router= useRouter()

    const handleClick = (id)=>{
        router.push(`./project/${id}`)
    }
    const getData = async() =>{
        try {
            let res = await axios.get("http://localhost:8080/items")
            let d = await res.data
            setData(d)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData(data)
    })
    console.log(data);
  return (
    <>
        <h1 style={{margiLeft:"100px"}}>Projects</h1>
        {
            data.map((el)=>(
                <div key={el.id}>
                    <div>
                        <h3 onClick={()=>handleClick(el.id)}>{el.full_name}</h3>
                        <h3>{el.language}</h3>
                        <h3>{el.forks}</h3>
                        <h3>{el.scors}</h3>
                        <h3>{el.size}</h3>
                    </div>
                </div>
            ))
        }
    </>
  
  )
}

export default Projects

// export async function getServerSideProps(){
//     let res= await axios.get("http://localhost:8080/items")
//     let data= await res.data
//     console.log("res",data)
//     return{
//         props:{
//             details:data
//         }
//     }
// }