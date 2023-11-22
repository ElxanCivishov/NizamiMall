import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getMainCats = async () => {
  const response = await axios.get(`${base_url}categories`);
  return response.data;
};

const createMainCat = async (maincat) => {
  const response = await axios.post(`${base_url}categories`, maincat);
  return response.data;
};

const updateMainCat = async (maincat) => {
  const response = await axios.post(
    `${base_url}categories/${maincat.id}`,
    maincat.data
  );

  return response.data;
};

const getMainCat = async (id) => {
  const response = await axios.get(`${base_url}categories/${id}`);
  return response.data;
};

const deleteMainCat = async (id) => {
  console.log(id);
  const response = await axios.delete(`${base_url}categories/${id}`);
  return response.data;
};

const maincatService = {
  getMainCats,
  createMainCat,
  getMainCat,
  updateMainCat,
  deleteMainCat,
};

export default maincatService;
