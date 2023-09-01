import React, { useEffect, useState } from 'react'

export default function Listing() {
  const [data, setData] = useState(null);
    console.log('data', data)

    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));
      }, []);


  return (
    <div>
      
      {data?.map((datas,index)=>{
        console.log('datas', datas)
        return(
            <>
           
            
           <ul>
           <li>{datas.id}</li>
           <li>{datas.title}</li>
           </ul>
           
            </>
           
        )
       
      })}
      
    </div>
  )
}
