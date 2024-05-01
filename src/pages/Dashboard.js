import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useState } from "react";
import Navbar from "./Navbar";
import { supabase } from "../supaBaseClient";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [products, setProducts] = useState([]);

  const halletSunu = async () => {
    const asdas = await supabase.auth.admin;
  };
  halletSunu();

  async function handleSave() {
    try {
      const { error } = await supabase
        .from("products")
        .insert({
          name: productName,
          price: productPrice,
        })
        .single();
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
    
    setShowModal(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (error) throw error;
      if (data != null) {
        setProducts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  const handleFilter = (e) => {
    const searchValue = e.target.value.toLowerCase();

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="flex justify-between py-2 mt-10">
        <div className="flex justify-start items-center w-full">
          <div className="mr-2">
            <label htmlFor="filter">Filter:</label>
          </div>
          <div className="relative flex-grow">
            <input
              type="text"
              id="filter"
              placeholder="Search products..."
              className="border border-gray-500 rounded px-4 py-1 pr-8 focus:outline-none focus:border-blue-500 w-auto" 
              onChange={handleFilter}
            />
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-serif w-44 h-auto border border-blue-700 rounded"
          onClick={() => setShowModal(true)}
        >
          Add Product
        </button>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-96 h-80 overflow-y-auto relative">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">
                  Add Product & Edit Product
                </h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowModal(false)}
                >
                  <img
                    className="w-4 h-4 rounded-full"
                    src="close.png"
                    alt="close"
                  />
                </button>
              </div>
             
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-auto mb-2 mt-4"
              />
              
              <input
                type="text"
                placeholder="Product Price"
                defaultValue={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-auto mb-4 mt-4"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 border border-blue-700 rounded w-full"
                onClick={handleSave}
              >
                Add & Edit
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-start gap-11">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
