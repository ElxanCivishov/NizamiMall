import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getMaps = async (search) => {
  const response = await axios.get(`${base_url}maps?${search}`);
  return response.data;
};

const createMap = async (map) => {
  const response = await axios.post(`${base_url}maps`, map);
  return response.data;
};

const updateMap = async (map) => {
  const response = await axios.post(`${base_url}maps/${map.id}`, map.data);

  return response.data;
};

const getMap = async (id) => {
  const response = await axios.get(`${base_url}maps/${id}`);
  return response.data;
};

const deleteMap = async ({ id }) => {
  const response = await axios.delete(`${base_url}maps/${id}`);
  return response.data;
};

const mapService = {
  getMaps,
  createMap,
  getMap,
  updateMap,
  deleteMap,
};

export default mapService;
