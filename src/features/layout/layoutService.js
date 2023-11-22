import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getLayout = async () => {
  const response = await axios.get(`${base_url}layout`);
  return response.data;
};

const updateLayout = async (layout) => {
  const response = await axios.post(`${base_url}layout`, layout.data);

  return response.data;
};

const layoutService = {
  getLayout,
  updateLayout,
};

export default layoutService;
