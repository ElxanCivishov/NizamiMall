import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const createContact = async (contact) => {
  const response = await axios.post(`${base_url}contact`, contact);
  return response.data;
};

const ContactService = {
  createContact,
};

export default ContactService;
