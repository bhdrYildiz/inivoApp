import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaleProduct, AllOrders } from "../redux/salesSlice";
import { supabase } from "../supaBaseClient";
import { selectAuth } from "../redux/authSlice";

const SalesDialog = ({ product }) => {
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
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 h-80 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Add Sale</h2>
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
