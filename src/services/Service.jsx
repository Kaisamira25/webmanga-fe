import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});
instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;

const fetchAllPublications = () => {
  return instance.get("/api/v1/publications/all");
};

const fetchAllImages = () => {
  return instance.get("/api/v1/images/all");
};

const fetchAllProduct = () => {
  return instance.get("/api/products");
};
const fetchAllCategories = () => {
  return instance.get("/api/categories");
};

const fetchProductById = (productId) => {
  return instance.get(`/api/products/${productId}`);
};
const fetchCart = () => {
  return instance.get("/api/cart");
};
const fetchAddToCart = () => {
  return instance.post("/api/cart");
};
const fetchCartById = (orderItem) => {
  return instance.get(`/api/cart/${orderItem}`);
};

const fetchUpdateCart = (orderId, order) => {
  return instance.put(`/api/cart/${orderId}`, order);
};
const fetchDeleteCart = (orderId, order) => {
  return instance.delete(`/api/cart/${orderId}`, order);
};

export {
  fetchAllPublications,
  fetchAllImages,
  fetchAllProduct,
  fetchAllCategories,
  fetchProductById,
  fetchCart,
  fetchCartById,
  fetchAddToCart,
  fetchUpdateCart,
  fetchDeleteCart,
};
