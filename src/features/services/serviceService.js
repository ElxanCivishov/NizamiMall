import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getServices = async () => {
  const response = await axios.get(`${base_url}service/`);
  return response.data;
};

const getService = async (id) => {
  const response = await axios.get(`${base_url}service/${id}`);
  return response.data;
};

const serviceService = {
  getServices,
  getService,
};

export default serviceService;
