import axios from "axios";
import { base_url } from "../../../utils/baseUrl";

const getServiceInfo = async () => {
  const response = await axios.get(`${base_url}home-service`);
  return response.data;
};

const updateServiceInfo = async (serviceinfo) => {
  const response = await axios.post(`${base_url}home-service`, {
    title: serviceinfo.title,
    content: serviceinfo.content,
  });

  return response.data;
};

const serviceinfoService = {
  getServiceInfo,
  updateServiceInfo,
};

export default serviceinfoService;
