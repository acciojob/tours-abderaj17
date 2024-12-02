import React, { useState } from 'react'

const Tour = ({id, name , info, image, price, removeTour}) => {
 const [showMore, setShowMore] = useState(false);
  return (
    <div>
<div className='tour'>
    <img src={image} alt={name} className='tour-image' />
    <div className='tour-info'>
        <h3>{name}</h3>
        <h4 className='tour-price'>${price}</h4>
        <p>
            {showMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={()=> setShowMore(!showMore)} className='show-more-button'>
                {showMore ? 'Show less' : 'show more'}
            </button>
        </p>
        <button onClick={()=> removeTour(id)} className='remove-tour-button'>
            Not Interested
        </button>
    </div>
</div>
    </div>
  )
}

export default Tour