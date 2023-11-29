import axios from "axios";
import { base_url } from "../../../utils/baseUrl";

const getBlogInfo = async () => {
  const response = await axios.get(`${base_url}home-blog`);
  return response.data;
};

const updateBlogInfo = async (bloginfo) => {
  const response = await axios.post(`${base_url}home-blog`, bloginfo);
  return response.data;
};

const bloginfoBlog = {
  getBlogInfo,
  updateBlogInfo,
};

export default bloginfoBlog;
