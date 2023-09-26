import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createApiWithEndpoints = (endpoints) => {
  return createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    endpoints: endpoints,
    reducerPath: "api1", // Unique reducer path for this API slice
  });
};

const customEndpoints = (builder) => ({
  getProducts: builder.query({
    query: () => "products",
    method: "GET",
  }),
  searchProducts: builder.query({
    query: (searchTerm) => `products/search?=${searchTerm}`,
  }),
  addProduct: builder.mutation({
    query: (productData) => ({
      url: "products/add",
      method: "POST",
      body: productData,
    }),
  }),
});

const api1 = createApiWithEndpoints(customEndpoints);

export const {
  useSearchProductsQuery,
  useAddProductMutation,
  useGetProductsQuery,
} = api1;
export default api1;
