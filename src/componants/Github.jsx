import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData ] = useState([])

    useEffect(()=> {
        fetch('https://api.github.com/users/rohitarya220')
        .then(respose => respose.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='flex flex-col  text-center  bg-gray-800 h-screen text-white p-4 text-3xl'>
        <img src= {data.avatar_url} className='w-52 h-56 mx-auto rounded-full'   />
        <h1 className=' font-bold mt-3'>{data.name} </h1> 
        <div className='flex gap-4 justify-center items-center'> 
        <p className=' text-lg'> following: {data.following} </p>
        <p className=' text-lg'> followers: {data.followers} </p>
        
        </div>
    


    </div>
  )
}

export default Github