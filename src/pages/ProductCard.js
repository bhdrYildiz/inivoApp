import React, { useState } from "react";
import SalesDialog from "./SalesDialog";

const ProductCard = ({ product }) => {
  const [showSalesDialog, setShowSalesDialog] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-14 mt-8">
      <div className="flex justify-center items-center mx-8"></div>
      <div className="mt-4">
        <h3 className="font-medium text-gray-900">{product.name}</h3>
        <p className="text-gray-600">{product.price} $</p>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-2"
          onClick={() => setShowSalesDialog(true)}
        >
          Add Sale
        </button>
      </div>
      {showSalesDialog && <SalesDialog product={product} />}
    </div>
  );
};

export default ProductCard;
