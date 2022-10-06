import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/products`)
      .then((response) => response.json())
      .then((data) =>
        // console.log(data)
        {
          setImages(data);
        }
      );
  }, []);

  return (
    <div className="bg-slate-300">
      <div className="text-4xl text-center font-bold py-4">
        <h1>Products</h1>
      </div>
      <div className="container-mx-auto ">
        
        <div className="grid grid-cols-5 gap-4">
          {images.map((image) => (
            <ProductsCard key={image.id} image={image} />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Products;
