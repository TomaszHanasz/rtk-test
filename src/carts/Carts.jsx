import React from "react";
import { useGetCartsQuery } from "./cartsSlice";

function CartList() {
  const { data: carts, isLoading, isError } = useGetCartsQuery();

  if (isLoading) {
    return <div>Loading carts...</div>;
  }

  if (isError) {
    return <div>Error loading carts.</div>;
  }

  return (
    <div>
      <h2>Carts</h2>
      <ul>
        {carts.carts.map((cart, index) => (
          <li key={index}>{cart.total}</li>
        ))}
      </ul>
    </div>
  );
}

export default CartList;
