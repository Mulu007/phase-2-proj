import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard';

const Products = () => {
  const [images,setImages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/shoes`)
    .then(response => response.json())
    .then(data => 
      // console.log(data)
      {setImages(data)})
  },[])

  return (
    <div className='container-mx-auto'>
      <div className='grid grid-cols-3 gap-4'>
        {images.map(image => (
          <ProductsCard key={image.id} image={image}/>
        ))}
      </div>
    </div>
  );
}

export default Products
