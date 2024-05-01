import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllOrders } from "../redux/salesSlice";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Navbar from "./Navbar";

const ProductAnalyze = () => {
  const dispatch = useDispatch();
  const ordersData = useSelector((state) => state.orders.orders);

  useEffect(() => {
    dispatch(AllOrders());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <Navbar/>
      <h2 className="text-2xl font-bold mb-4 text-center">Product Sales Analysis</h2>
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ordersData}
            margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="productName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductAnalyze;
