import { addCartProduct } from "@/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function ProductInfo({ product }) {
  const router = useRouter();
  const addCart = async () => {
    // TODO 1. 장바구니에 아이템을 담는 API 함수 호출
    // 객체는 순서가 없다. 객체 자체를 전개해서 전달
    await addCartProduct({ ...product });
    // TODO 2. 카트 페이지로 이동하는 함수 호출
    router.push("/cart");
  };
  return (
    <div>
      <h3>{product.name}</h3>
      {product.imageUrl && (
        <Image
          alt="productImg"
          src={product.imageUrl}
          width={200}
          height={200}
          priority
        />
      )}
      <p>{product.price}</p>
      <button onClick={addCart}>장바구니에 추가</button>
    </div>
  );
}

export default ProductInfo;
