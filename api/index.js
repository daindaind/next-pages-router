import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

// TODO: 전체 상품 목록을 불러오는 API
function fetchProducts({ signal }) {
  return instance.get("/products", signal);
}

// TODO: 상품 상세 정보 불러오는 API
function fetchProductDetail({ productId }) {
  return instance.get(`/products/${productId}`);
}

// TODO: 장바구니 목록을 불러오는 API
function fetchCartsList() {
  return instance.get("/carts");
}

// TODO: 장바구니에 상품을 추가하는 API
function addCartProduct({ id, name, imageUrl, price }) {
  return instance.post("/carts", {
    id,
    name,
    imageUrl,
    price,
  });
}

// TODO: 장바구니에 상품을 삭제하는 API
function deleteCartProduct({ id }) {
  console.log(id);
  return instance.delete(`/carts/${id}`);
}

export {
  fetchProducts,
  fetchProductDetail,
  fetchCartsList,
  addCartProduct,
  deleteCartProduct,
};
