import axios from "axios";
import { base_url } from "../../utils/baseUrl";

// login user
const login = async (user) => {
  const response = await axios.post(`${base_url}login`, user);
  return response.data;
};

// Logout user
const logout = async () => {
  const response = await axios.post(`${base_url}logout`);
  return response.data;
};

// Get User Profile
const getUser = async () => {
  const response = await axios.get(`${base_url}user`);
  return response.data;
};

// Update User
const updateUser = async (userData) => {
  console.log(userData);
  const response = await axios.post(`${base_url}settings`, {
    email: userData.email,
    name: userData.name,
  });
  return response.data;
};

// Change Password
const changePassword = async (data) => {
  const response = await axios.post(`${base_url}change-password`, {
    password: data.oldPassword,
    new_password: data.password,
    password_confirmation: data.password2,
  });
  return response.data.message;
};

const authService = {
  login,
  logout,
  updateUser,
  getUser,
  changePassword,
};

export default authService;
