import axios from "axios";

axios.defaults.baseURL = "https://basic-crud-project-backend.vercel.app/api/v1";

export const read = async () => {
  const res = await axios.get("/");
  return res.data?.data;
};

export const readSingle = async (productId) => {
  const res = await axios.get(`/${productId}`);
  console.log(res.data);
  return res.data?.data;
};

export const createProduct = async (productData) => {
  await axios.post("/create", productData);
  return true;
};

export const updateProduct = async (productId, productData) => {
  await axios.put(`/update/${productId}`, productData);
  return true;
};

export const deleteProduct = async (productId) => {
  await axios.delete(`/delete/${productId}`);
  return true;
};
