import React from 'react'
import Tour from './Tour';

const Tours = ({tours, removeTours}) => {
    const handleRemove = (id)=>{
        removeTours(tours.filter((tour)=>tour.id!==id));
    }
  return (
    <div className='tours'>
        {tours.map((tour)=>(
            <Tour key={tour.id} {...tour} removeTours={handleRemove}/>
        ))}

    </div>
  )
}

export default Tours