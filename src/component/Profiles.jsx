import React, {useState, useEffect } from 'react'
import './Profiles.css'

function Profiles() {
    const [data, setData] = useState([])

    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((response) => {
        return response.json()
      }).then((data) => {
          setData(data)
      })
    })
  return (
   <div className='forma'>
       {data.map((el)=>(
           <div className='profile'>
               <h1>{el.id}</h1>
               <img src={el.thumbnailUrl}/>
               <h2>{el.title}</h2>
           </div>
       ))}
   </div>
  )
}

export default Profiles