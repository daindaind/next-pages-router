import Image from "next/image";
import React from "react";

function ProductCart({ item, onClick }) {
  return (
    <li>
      <Image alt="productImage" width={100} height={100} src={item.imageUrl} />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <button onClick={onClick}>장바구니에서 삭제</button>
    </li>
  );
}

export default ProductCart;
