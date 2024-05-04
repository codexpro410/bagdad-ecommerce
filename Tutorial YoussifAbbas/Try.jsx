import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Try = () => {
  // Sample image data array with image objects
  const images = [
    {
      id: 1,
      src: '/images/products/special-offers/s1.jpg',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: '/images/products/special-offers/s2.jpg"',
      alt: 'Image 2',
    },
    // Add more image objects here as needed
  ];

  // Get the 'id' parameter from the URL using useParams
  const { id } = useParams();

  // Find the selected image object from the images array
  const selectedImage = images.find((image) => image.id === parseInt(id));

  // State to track the currently displayed image
  const [currentImage, setCurrentImage] = useState(selectedImage || images[0]);

  // Function to handle image click and update the currently displayed image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            style={{
              border: currentImage.id === image.id ? '2px solid blue' : 'none',
              cursor: 'pointer',
              margin: '5px',
            }}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div>
        <h2>Selected Image</h2>
        <img src={currentImage.src} alt={currentImage.alt} />
      </div>
    </div>
  );
};

// export default Try;


export const Try1= () => {
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
    const params1 = useParams()
    console.log(params1);

      const prod = special.find(e => e.id === +params.id)
    const {images} = product
    const [imageIndex,setImageIndex] = useState(0)
    return (
        <div>
            <img src={prod.images[imageIndex]} alt="" />
            <div className="smallImgs">
                {prod.images.map((source,index)=>
                <img onClick={()=> setImageIndex(index)} key={index} src={source}/>
                )}
            </div>
    </div>
    )
}