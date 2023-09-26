import React, { useState } from "react";
import {
  useSearchProductsQuery,
  useGetProductsQuery,
  useAddProductMutation,
} from "./productsSlice";

function ProductList() {
  const api = createApiWithEndpoints(customEndpoints);
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
  } = useSearchProductsQuery(searchTerm, { api });

  const [
    addProduct,
    { isLoading: isAddingProduct, isError: isErrorAddingProduct },
  ] = useAddProductMutation({ api });

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading products.</div>;
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  console.log(products);

  return (
    <div>
      <h2>Products</h2>
      <div>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            console.log("searchTerm:", e.target.value); // Debugging
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {products.products.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
