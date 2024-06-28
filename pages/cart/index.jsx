import { deleteCartProduct, fetchCartsList } from "@/api";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

function Cart() {
  const [carts, setCarts] = useState([]);
  const router = useRouter();

  const handleDeleteProduct = useCallback(
    async (id) => {
      // await deleteCartProduct({ id })
      //   .then((res) => {
      //     console.log(res.data);
      //   })
      //   .catch((e) => console.error(e));
      // FE server 활용하기 (api/carts)
      const { data } = await axios.post(`http://localhost:3000/api/carts`, {
        id,
      });
      alert(data);

      //  router.asPath: 현재 페이지의 경로를 알려줌
      router.replace(router.asPath);
    },
    [router]
  );

  useEffect(() => {
    fetchCartsList()
      .then((res) => setCarts(res.data))
      .catch((e) => console.error(e));
  }, [handleDeleteProduct]);

  const resultPrice = carts.reduce((acc, cur) => {
    return acc + parseFloat(cur.price);
  }, 0);

  return (
    <>
      <div>
        <ul>
          {carts.map((item, _) => (
            <li key={item.id}>
              <Image
                alt="productImage"
                width={100}
                height={100}
                src={item.imageUrl}
              />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={() => handleDeleteProduct(item.id)}>
                장바구니에서 삭제
              </button>
            </li>
          ))}
        </ul>
        <p>총 수량: {carts.length}개</p>
        <p>총 가격: {resultPrice}</p>
      </div>
    </>
  );
}

export default Cart;
