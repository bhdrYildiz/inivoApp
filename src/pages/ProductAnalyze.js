import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllOrders } from "../redux/salesSlice";
import { Bar } from "react-chartjs-2";

const ProductAnalyze = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllOrders());
  }, [dispatch]);

  const data = useSelector((state) => state.AllOrders);
  console.log(data);
  return (
    <div>
      <h2>Ürün Analizi</h2>
      {data && data.length > 0 ? (
        <div style={{ height: 400, width: 600 }}>
          <Bar data={data}></Bar>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default ProductAnalyze;
