import React from 'react'

const ProductsCard = ({image}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.image} alt="" className=" float-left w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-black-500 text-xl mb-2 underline-offset-auto">
          Name: {image.name}
        </div>
        <ul>
          <li><strong>Size: </strong>{image.size}</li>
          <li><strong>Color: </strong>{image.color}</li>
          <li><strong>Condition: </strong>{image.condition}</li>
          <li className='px=6 py-4 text-3xl'><strong>Price: </strong>{"$" +image.price}</li>
        </ul>
      </div>
      {/* <div className="px=6 py-4 ">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
      </div> */}
    </div>
  ) 
}

export default ProductsCard
