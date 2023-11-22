import axios from "axios";
import { base_url } from "../../../utils/baseUrl";

const getSliders = async () => {
  const response = await axios.get(`${base_url}sliders`);
  return response.data;
};
const createSlider = async (slider) => {
  const response = await axios.post(`${base_url}sliders`, slider);
  return response.data;
};
const updateSlider = async (slider) => {
  const response = await axios.post(
    `${base_url}sliders/${slider.id}`,
    slider.data
  );

  return response.data;
};

const getSlider = async (id) => {
  const response = await axios.get(`${base_url}sliders/${id}`);
  return response.data;
};

const deleteSlider = async ({ id }) => {
  const response = await axios.delete(`${base_url}sliders/${id}`);
  return response.data;
};
const sliderService = {
  getSliders,
  createSlider,
  getSlider,
  updateSlider,
  deleteSlider,
};

export default sliderService;
