import React from 'react'

const ProductsCard = ({image}) => {
  return (
    <div>
      {/* <div>
        <h1 className="text-3xl text-center font-extrabold ">Products</h1>
      </div> */}
      <div className="max-w-sm rounded overflow-hidden shadow-2xl hover:scale-105 duration-300 h-[550px] cursor-pointer">
        <img src={image.image} alt="" className=" float-left w-full object-cover h-[300px]" />
        <div className="px-6 py-4">
          <div className="font-bold text-black-500 text-xl mb-2 underline-offset-auto">
            Name: {image.name}
          </div>
          <ul>
            <li>
              <strong>Size: </strong>
              {image.size}
            </li>
            <li>
              <strong>Color: </strong>
              {image.color}
            </li>
            <li>
              <strong>Condition: </strong>
              {image.condition}
            </li>
            <li className="px=6 py-4 text-3xl">
              <strong>Price: </strong>
              {"$" + image.price}
            </li>
          </ul>
        </div>
        {/* <div className="px=6 py-4 ">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
      </div> */}
      </div>
    </div>
  ); 
}

export default ProductsCard
