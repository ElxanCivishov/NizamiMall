import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blogs`);
  return response.data;
};
const createBlog = async (blog) => {
  const response = await axios.post(`${base_url}blogs`, blog);
  return response.data;
};
const updateBlog = async (blog) => {
  const response = await axios.post(`${base_url}blogs/${blog.id}`, blog.data);

  return response.data;
};
const getBlog = async (id) => {
  const response = await axios.get(`${base_url}blogs/${id}`);
  return response.data;
};

const deleteBlog = async ({ id }) => {
  const response = await axios.delete(`${base_url}blogs/${id}`);
  return response.data;
};
const blogService = {
  getBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};

export default blogService;
