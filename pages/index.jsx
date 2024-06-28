import ProductHeader from "@/components/product/ProductHeader";
import ProductList from "@/components/product/ProductList";

// TODO 1. 상품 목록 페이지 : '/'
// TODO 2. 상품 상세 페이지 : '/products/productId'
// TODO 3. 장바구니 페이지 : '/carts'

function ProductPage() {
  return (
    <>
      <main>
        <ProductHeader />
        <ProductList />
      </main>
    </>
  );
}

export default ProductPage;
