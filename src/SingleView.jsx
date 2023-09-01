import React from 'react'
import {useLocation} from 'react-router-dom';

export default function SingleView() {
  const location = useLocation();
  
   
  return (

      <>
        
<div><p>{location?.state?.data.title}</p></div>

      </>
  )
  
}
