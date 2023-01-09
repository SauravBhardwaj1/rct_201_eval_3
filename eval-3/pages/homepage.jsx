import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Projects from './projects'

const Homepage = () => {
    
    const [data, setData] = useState([])

    const getData = async()=>{
        try {
            let res= await fetch(`https://api.github.com/users/SauravBhardwaj`)
            let d= await res.json()
            // console.log("res",d)
            setData(d)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getData(data)
    },[])

    // console.log("data",data)
  return (
    <div className='container'>
        <div className='left-box'>
            <div className='firtBox' key={data.id}>
                <Image src={"https://avatars.githubusercontent.com/u/108116026?v=4"} alt="myimg" width={100} height={100}/>
                            
                {/* <Link>@sauravbhardwaj1</Link> */}
                <h3>Full-stack Developer | FOSS | JavaScript |</h3>
                <h3>Typescript | NodeJS | Deno | ReactJS | HTML</h3>
                <h3> CSS | Chakra-UI | MUI</h3>
                <button style={{padding:"5px", backgroundColor:"lightblue",color:"black"}}>
                    <Link href={"../public/Saurav_Bhardwaj_Resume.pdf" } download></Link>Resume
                </button>
                <button style={{padding:"5px", backgroundColor:"lightblue",color:"black"}}>Follow</button>
            </div>
                                  
            <div className='secondbox'>
                <h3>TYPESCRIPT  REACT.JS  NODEJS  DENO</h3>
                <h3>MONGODB POSTGRESQL GIT REACTNATIVE</h3>
                <h3>CHAKRA-UI CSS  ANTD TAILWIND MUI</h3>
            </div>
        </div>
        <div className='rightBox'>
            <Projects />
        </div>
    </div>
  )
}

export default Homepage

// export async function getServerSideProps(){
//     let res= await fetch(`https://api.github.com/users/SauravBhardwaj`)
//     let data= await res.json()
//     console.log("res",d)
//     return{
//         props:{
//             details:data
//         }
//     }
// }
