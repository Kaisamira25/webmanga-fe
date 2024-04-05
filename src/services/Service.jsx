import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});
instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    const accessToken = sessionStorage.getItem("accessToken");

    if (token || accessToken) {
      config.headers.Authorization = `bearer ${token ? token : accessToken}`;
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

const forgotApi = (email) => {
  return instance.post("/api/v1/customer/forgotPassword", email);
};

const newPasswordApi = (password, code) => {
  return instance.post("/api/v1/customer/passwordReset", {
    params: { code },
    headers: { password },
  });
};
const fetchPublicationContentPagingate = (page, genre) => {
  const params = {
    page: page,
  };
  if (genre) {
    params.genre = genre;
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

const fetchPublicationsDetailsInformation = (id) => {
  return instance.get(`/api/v1/publications/id/${id}`);
};

const fetchUpdateAddress = (address, phoneNumber) => {
  return instance.put("/api/v1/customer/address", {
    address,
    phoneNumber,
  });
};

const fetchCreateAddress = (address, phoneNumber) => {
  return instance.post("/api/v1/customer/address", {
    address,
    phoneNumber,
  });
};

const fetchUserInfo = () => {
  return instance.get("/api/v1/customer/info");
};

const fetchUserAddress = () => {
  return instance.get("/api/v1/customer/address");
};

const fetchChangePassword = (password, newPassword, confirmPassword) => {
  return instance.patch("/api/v1/customer/change-password", {
    password,
    newPassword,
    confirmPassword,
  });
};

export {
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
  forgotApi,
  newPasswordApi,
  fetchUpdateAddress,
  fetchCreateAddress,
  fetchUserInfo,
  fetchUserAddress,
  fetchChangePassword,
};
