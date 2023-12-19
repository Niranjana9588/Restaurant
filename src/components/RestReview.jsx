import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview(reviews) {
  const [open, setOpen] = useState(false);

  // const reviews = props.reviews
  // console.log(reviews);

  return (
    <>
        
        <button onClick={() => setOpen(!open)} className='btn btn-warning'>Click here to view the review </button>

       <Collapse in={open}>

        <div className='my-2'>
       {
        reviews?.map((item)=>(<>
         <hr />
        <h6>name {item.name} - date {item.date}</h6>
        <p>Rating: {item.rating}</p>
        <p>{item.comments}</p>
        </>))
       
       }
     </div>
     
    
       </Collapse>
    </>
  )
}

export default RestReview