/*
Tutorial to see how to change image with another image
using useParams, useState, and more

to see the result i need App.js
and put something like this

<Route path='/try/:id' element={<Try1/>} />


*/

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Try1 = () => {
    const special = [
        {
            id: 100,
            images: [
                "/images/products/special-offers/s1.jpg",
                "/images/products/special-offers/s2.jpg",
                "/images/products/special-offers/s3.jpg",
                "/images/products/special-offers/s4.jpg"
            ],
        },
        {
            id: 101,
            images: [
                "/images/products/special-offers/s3.jpg",
                "/images/products/special-offers/s4.jpg",
                "/images/products/special-offers/s1.jpg",
                "/images/products/special-offers/s2.jpg"
            ],
          }
        ];

  const { id } = useParams();
  console.log(id);

  const prod = special.find(e => e.id === +id);
  const [imageIndex, setImageIndex] = useState(0);

  if (!prod || !prod.images || prod.images.length === 0) {
    // Handle the case when prod is not found or has no images
    return <div>No Data Found</div>;
  }

  return (
    <div>
      <img src={prod.images[imageIndex]} alt="" />
      <div className="smallImgs">
        {prod.images.map((source, index) => (
          <img
            onClick={() => setImageIndex(index)}
            key={index}
            src={source}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
