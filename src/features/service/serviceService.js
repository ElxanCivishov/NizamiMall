import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getServices = async (search) => {
  const response = await axios.get(`${base_url}companies?${search}`);
  return response.data;
};
const createService = async (service) => {
  const response = await axios.post(`${base_url}companies`, service);
  return response.data;
};
const updateService = async (service) => {
  const response = await axios.post(
    `${base_url}companies/${service.id}`,
    service.data
  );

  return response.data;
};
const getService = async (id) => {
  const response = await axios.get(`${base_url}companies/${id}`);
  return response.data;
};

const deleteService = async ({ id }) => {
  const response = await axios.delete(`${base_url}companies/${id}`);
  return response.data;
};
const serviceService = {
  getServices,
  createService,
  getService,
  updateService,
  deleteService,
};

export default serviceService;
