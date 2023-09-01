import React, { useEffect, useState } from 'react'
import './table.css';

export default function Table() {

    const [data, setData] = useState(null);
    console.log('data', data)

    // let navigateSingleView =useNavigate();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));
      }, []);


    //   function singleViewData (data) {
    //     navigateSingleView(`/singleView/` , {state:{data}})
    //   }


     
  return (
    <div>
      
      <thead>
                <tr>
                    <th>index</th>
                    <th>title</th>
                    <th>user id</th>
                    <th>id</th>
                    <th>completed</th>
                    <th> Action</th>
                </tr>
                </thead>
      {data?.map((datas,index)=>{
        console.log('datas', datas)
        return(
            <>
           
            
           <tbody>
            <tr>
            <td>{index+1}</td> 
            <td>{datas?.title ? datas?.title : "Title"}</td>
            <td>{datas?.id}</td>
            <td>{datas?.userId}</td>
            <td>{datas?.completed ? "True" : "False"}</td>


            {/* <td onClick={()=>{singleViewData(datas)}}>Eye</td> */}
            </tr>
            </tbody>
            
           
            </>
           
        )
       
      })}
      
    </div>
  )
}
