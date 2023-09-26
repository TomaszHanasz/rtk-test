import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api2 = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => "carts",
    }),
  }),
  reducerPath: "api2", // Unique reducer path for this API slice
});

export const { useGetCartsQuery: useGetCartsQuery } = api2;
export default api2;
