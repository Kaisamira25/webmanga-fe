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

const loginApi = (data) => {
  return instance.post("/api/v1/auth/login", data);
};
const registerApi = (formData) => {
  return instance.post("/api/v1/auth/register", formData);
};
const verifyOtp = (otp) => {
  return instance.post("/api/v1/auth/verify", { otp: otp });
};
export {
  fetchAllProduct,
  fetchAllCategories,
  fetchProductById,
  fetchCart,
  fetchCartById,
  fetchAddToCart,
  fetchUpdateCart,
  loginApi,
  registerApi,
  verifyOtp
};
