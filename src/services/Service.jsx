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
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// instance.interceptors.response.use(
//   function(res) {
//     if (res.data && res.data.data) {
//       return res.data.data;
//     }
//     return res;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// );

export default instance;

const fetchAllPublications = () => {
  return instance.get("/api/v1/publications/all");
};

// const fetchAllPubliationWithImages = () => {
//   return instance.get("/api/v1/publications/all/images");
// };

const fetchAllProduct = () => {
  return instance.get("/api/products");
};
const fetchProductById = (productId) => {
  return instance.get(`/api/v1/publications/${productId}`);
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

const loginApi = (data) => {
  return instance.post("/api/v1/auth/login", data);
};
const registerApi = (data) => {
  return instance.post("/api/v1/auth/register", data);
};
const verifyOtp = (data) => {
  return instance.post("/api/v1/auth/verify", data);
};
// const verifyOtpForgotPassword = (code) => {
//   return instance({
//     method: "get",
//     url: "api/v1/customer/passwordReset",
//     params: {
//       code: code,
//       password: password,
//     },
//   });
// };
const forgotPasswordApi = (email) => {
  return instance.post("/api/v1/customer/forgotPassword", email);
};
const verifyResetPasswordCode = (code) => {
  return instance.post("/api/v1/customer/passwordResetCode", null, {
    params: { code: code },
  });
};
const newPasswordApi = (data) => {
  return instance.post("/api/v1/customer/passwordResetNewPassword", data);
};
const fetchPublicationContentPagingate = (page, genreId) => {
  const params = {
    page: page,
  };
  if (genreId) {
    params.genreId = genreId;
  }
  return instance.get("/api/v1/publications/pagination", { params });
};
const fetchNewPublications = () => {
  return instance.get("/api/v1/publications/new-arrivals");
};
const fetchHotPublications = () => {
  return instance.get("/api/v1/publications/best-sellers");
};
const fetchAllGenre = () => {
  return instance.get("/api/v1/genre/all");
};
const fetchPublictionsFromGenre = (genreID) => {
  return instance.get(`/api/v1/genre/${genreID}`);
};
const fetchPublicationsDetailsInformation = (id) => {
  return instance.get(`/api/v1/publications/id/${id}`);
};
export {
  verifyResetPasswordCode,
  fetchPublictionsFromGenre,
  fetchPublicationsDetailsInformation,
  fetchAllGenre,
  fetchHotPublications,
  fetchNewPublications,
  fetchAllPublications,
  fetchPublicationContentPagingate,
  fetchAllProduct,
  fetchProductById,
  fetchCart,
  fetchCartById,
  fetchAddToCart,
  fetchUpdateCart,
  fetchDeleteCart,
  loginApi,
  registerApi,
  verifyOtp,
  // verifyOtpForgotPassword,
  forgotPasswordApi,
  newPasswordApi,
};
