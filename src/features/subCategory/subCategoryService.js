import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getSubCats = async () => {
  const response = await axios.get(`${base_url}subcategories`);
  return response.data;
};

const createSubCat = async (subcat) => {
  const response = await axios.post(`${base_url}subcategories`, subcat);
  return response.data;
};

const updateSubCat = async (subcat) => {
  const response = await axios.post(
    `${base_url}subcategories/${subcat.id}`,
    subcat.data
  );

  return response.data;
};

const getSubCat = async (id) => {
  const response = await axios.get(`${base_url}subcategories/${id}`);
  return response.data;
};

const deleteSubCat = async (id) => {
  console.log(id);
  const response = await axios.delete(`${base_url}subcategories/${id}`);
  return response.data;
};

const subcatService = {
  getSubCats,
  createSubCat,
  getSubCat,
  updateSubCat,
  deleteSubCat,
};

export default subcatService;
