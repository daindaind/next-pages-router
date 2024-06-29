import { fetchCartsList } from "@/api";
import ProductCart from "@/components/cart/ProductCart";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

function Cart({ data }) {
  const router = useRouter();

  const handleDeleteProduct = async (id) => {
    // FE server 활용하기 (api/carts)
    const { data } = await axios.post(`http://localhost:3000/api/carts`, {
      id,
    });
    alert(data);

    //  router.asPath: 현재 페이지의 경로를 알려줌
    router.replace(router.asPath);
  };

  const resultPrice = data?.reduce((acc, cur) => {
    return acc + parseFloat(cur.price);
  }, 0);

  return (
    <>
      <div>
        <ul>
          {data.map((item, _) => (
            <ProductCart
              key={item.id}
              item={item}
              onClick={() => handleDeleteProduct(item.id)}
            />
          ))}
        </ul>
        <p>총 수량: {data.length}개</p>
        <p>총 가격: {resultPrice}</p>
      </div>
    </>
  );
}

export default Cart;

// SSR 로 변경 (No useEffect data fetch)
export async function getServerSideProps() {
  const response = await fetchCartsList();

  return {
    props: {
      data: response.data,
    },
  };
}
