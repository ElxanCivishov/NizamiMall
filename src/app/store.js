import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
// import authReducer from "../features/auth/authSlice";
// import userReducer from "../features/user/userSlice";
import blogReducer from "../features/blogs/blogSlice";
import serviceReducer from "../features/services/serviceSlice";
import contactReducer from "../features/contact/contactSlice";
import helpReducer from "../features/help/helpSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    // auth: authReducer,
    // users: userReducer,
    blogs: blogReducer,
    services: serviceReducer,
    contacts: contactReducer,
    help: helpReducer,
  },
});
