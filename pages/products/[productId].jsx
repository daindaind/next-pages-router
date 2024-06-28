import { fetchProductDetail } from "@/api";
import ProductInfo from "@/components/product/ProductInfo";
import React from "react";

function ProductDetailPage({ data }) {
  return (
    <>
      <ProductInfo product={data} />
    </>
  );
}

export default ProductDetailPage;

export async function getServerSideProps(context) {
  const productId = context.params.productId;

  const response = await fetchProductDetail({ productId });

  return {
    props: {
      data: response.data,
    },
  };
}
