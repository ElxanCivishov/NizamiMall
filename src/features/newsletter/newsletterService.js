import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const createNewsletter = async (newsletter) => {
  const response = await axios.post(`${base_url}subscribers`, newsletter);
  return response.data;
};

const getNewsletters = async () => {
  const response = await axios.get(`${base_url}subscribers`);
  return response.data;
};

const deleteNewsletter = async ({ id }) => {
  const response = await axios.delete(`${base_url}subscribers/${id}`);
  return response.data;
};

const NewsletterService = {
  createNewsletter,
  getNewsletters,
  deleteNewsletter,
};

export default NewsletterService;
