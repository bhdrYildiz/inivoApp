import React from "react";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSave = () => {
    // Burada verileri kaydetmek veya başka bir işlem yapmak istediğiniz kodu ekleyebilirsiniz
    console.log("Product Name:", productName);
    console.log("Product Price:", productPrice);

    // Modalı kapat
    setShowModal(false);
  };

  const products = [
    {
      id: 1,
      image: "product-image1.jpg",
      name: "Product Name 1",
      price: "$19.99",
    },
    {
      id: 2,
      image: "product-image2.jpg",
      name: "Product Name 2",
      price: "$29.99",
    },
    {
      id: 3,
      image: "product-image3.jpg",
      name: "Product Name 3",
      price: "$39.99",
    },
    {
      id: 3,
      image: "product-image3.jpg",
      name: "Product Name 3",
      price: "$39.99",
    },
    {
      id: 3,
      image: "product-image3.jpg",
      name: "Product Name 3",
      price: "$39.99",
    },
    {
      id: 3,
      image: "product-image3.jpg",
      name: "Product Name 3",
      price: "$39.99",
    },
  ];

  const handleFilter = () => {
    // Burada filtreleme işlemleri yapılabilir
    alert("Filter clicked!");
  };

  return (
    <div className="container mx-auto">
      {/* Navbar */}
     

      {/* Filtreleme */}
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
              className="border border-gray-500 rounded px-4 py-1 pr-8 focus:outline-none focus:border-blue-500 w-auto" // Added w-full for consistent width
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
            <div className="bg-white p-6 rounded-lg shadow-md w-96 h-80 overflow-y-auto">
              <h2 className="text-lg font-bold mb-4">
                Add Product & Edit Product
              </h2>
              {/* Product Name Input */}
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-auto mb-2 mt-4"
              />
              {/* Product Price Input */}
              <input
                type="text"
                placeholder="Product Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-auto mb-4 mt-4"
              />
              {/* Save Button */}
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

      {/* Ürün Listesi */}
      <div className="flex flex-wrap justify-start gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
