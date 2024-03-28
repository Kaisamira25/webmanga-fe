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
const registerApi = (formData) => {
  return instance.post("/api/v1/auth/register", formData);
};
const verifyOtp = (otp, email) => {
  console.log(otp);
  return instance({
    method: "post",
    url: "api/v1/auth/verify",
    params: {
      otp: otp,
      email: email,
    },
  });
};
const sendEmailApi = async (emailData) => {
  try {
    // Gọi API để gửi email
    const response = await instance.post("/api/v1/customer/forgotPassword", emailData);
    return response.data; // Trả về dữ liệu từ phản hồi của API (nếu cần)
  } catch (error) {
    throw error; // Ném lỗi nếu gửi email không thành công
  }
};
const fetchPublicationContentPagingate = (page) => {
  return instance.get(`/api/v1/publications/pagination?page=${page}`)
}
const fetchNewPublications = () => {
  return instance.get("/api/v1/publications/new-arrivals")
}
const fetchHotPublications = () => {
  return instance.get("/api/v1/publications/best-sellers")
}
const fetchAllGenre = () => {
  return instance.get("/api/v1/genre/all")
}


export {
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
  sendEmailApi,
};
