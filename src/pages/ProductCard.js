import React from "react";

const ProductCard = ({ product }) => {
  const { image, name, price } = product;

  return (
    <div className="bg-white rounded-lg shadow-md p-12 mt-8">
      <div className="flex justify-center items-center mx-8">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 object-cover rounded-md"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-gray-600">{price}</p>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
