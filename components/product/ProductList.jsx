import React, { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetchProducts } from "@/api";

function ProductList() {
  const [data, setData] = useState([]);
  // useRouter로 페이지 라우팅 가능.
  // const router = useRouter();
  // router.push(`/products/${product.id}`);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = () => {
      fetchProducts({ signal: controller.signal })
        .then((response) => {
          setData(response.data);
        })
        .catch((e) => console.error(e));
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {/* map함수는 ul, li와 같은 리스트를 표현하는 태그로 표현하는 것이 정석 */}
      <ul>
        {data?.map((item, _) => (
          <li key={item?.id} className={styles.item}>
            <Link href={`/products/${item.id}`}>
              {/* next에서 제공하는 Image 태그를 활용해야 한다. */}
              <Image
                width={200}
                height={200}
                src={item.imageUrl}
                alt="product"
              />
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
