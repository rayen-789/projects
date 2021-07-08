import React, { useState, useEffect } from 'react'
const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert,setAlert]=useState(false);
  const bcg=rgb.join(',')
  const closeAlert=()=>{
      setAlert(false)
  }
  useEffect(()=>{
    const timeout=setTimeout(closeAlert,2500);
    return ()=>clearTimeout(timeout)
  },[alert])
    return (
       <article className='color' style={{backgroundColor:`rgb(${bcg})`} } onClick={()=>{
           setAlert(true);
           navigator.clipboard.writeText(hexColor)
           
       }} >
           <p className='percent-value'>
             {weight}%
           </p>
           <p className='color-value' >
           #{hexColor}
           </p>
           {alert && <p className='alert' >copied to clipboard</p>}
       </article>
    )
}

export default SingleColor