import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const createRent = async (rent) => {
  const response = await axios.post(`${base_url}rent`, rent);
  return response.data;
};

const getRents = async () => {
  const response = await axios.get(`${base_url}rent`);
  return response.data;
};

const getRent = async (id) => {
  const response = await axios.get(`${base_url}rent/${id}`);
  return response.data;
};

const deleteRent = async ({ id }) => {
  const response = await axios.delete(`${base_url}rent/${id}`);
  return response.data;
};

const rentService = {
  getRents,
  createRent,
  getRent,
  deleteRent,
};

export default rentService;
