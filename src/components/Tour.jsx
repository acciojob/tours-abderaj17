import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='tour'>
      <img src={image} alt={name} className='tour-image' />
      <div className='tour-info'>
        <h3>{name}</h3>
        <h4 className='tour-price'>${price}</h4>
        <p id={`tour-item-para-${id}`}>  {/* Correct ID added here */}
          {showMore ? info : `${info.substring(0, 200)}...`}
          <button
            id={`see-more-${id}`} // This ID stays for "Show More" button
            onClick={() => setShowMore(!showMore)}
            className='show-more-button'
          >
            {showMore ? 'See Less' : 'See More'}
          </button>
        </p>
        <button
          onClick={() => removeTour(id)}
          id={`delete-btn-${id}`}
          className='remove-tour-button'
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
