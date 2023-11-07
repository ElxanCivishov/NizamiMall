import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getHelp = async () => {
  const response = await axios.get(`${base_url}help/`);
  return response.data;
};

const helpService = {
  getHelp,
};

export default helpService;
