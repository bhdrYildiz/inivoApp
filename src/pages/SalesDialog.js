import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SaleProduct, AllOrders } from "../redux/salesSlice";
import { supabase } from "../supaBaseClient";

const SalesDialog = ({ product, onClose }) => {
  const [saleDate, setSaleDate] = useState("");
  const [saleQuantity, setSaleQuantity] = useState(0);
  const dispatch = useDispatch();

  const halletSunu = async () => {
    const asdas = await supabase.auth.admin;
  };
  const handleAddSale = () => {
    halletSunu();

    dispatch(
      SaleProduct({
        productId: product.id,
        count: saleQuantity,
        created_at: saleDate,
      })
    );

    dispatch(AllOrders());
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Add Sale</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <img className="w-4 h-4 rounded-full" src="close.png" alt="close" />
          </button>
        </div>
        {/* Product Info */}
        <p>{product.name}</p>
        <p>{product.price} $</p>
        {/* Sale Date Input */}
        <input
          type="date"
          value={saleDate}
          onChange={(e) => setSaleDate(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 w-auto mb-2 mt-4"
        />
        {/* Sale Quantity Input */}
        <input
          type="number"
          placeholder="Sale Quantity"
          value={saleQuantity}
          onChange={(e) => setSaleQuantity(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 w-auto mb-4 mt-4"
        />
        {/* Save Button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 border border-blue-700 rounded w-full"
          onClick={handleAddSale}
        >
          Add Sale
        </button>
      </div>
    </div>
  );
};

export default SalesDialog;
