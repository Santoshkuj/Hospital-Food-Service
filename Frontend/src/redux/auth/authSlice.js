import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

const managerData = JSON.parse(localStorage.getItem("Manager")) || null;
const pantryData = JSON.parse(localStorage.getItem("Pantry")) || null;
const deliveryData = JSON.parse(localStorage.getItem("Delivery")) || null;
const activeUser = managerData || pantryData || deliveryData;

const initialState = {
  user: activeUser,
  role: activeUser?.role,
  isAuthenticated: !!activeUser,
  status: "idle",
  error: null,
  loginAs: null,
};

export const login = createAsyncThunk("users/login", async (credentials) => {
  const response = await axiosInstance.post("/users/login", credentials);
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem(state.role)
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
    },
    toggleLogin(state, action) {
      state.loginAs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.role = action.payload.role;
        state.isAuthenticated = true;
        state.status = "succeeded";
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout, toggleLogin } = authSlice.actions;
export default authSlice.reducer;
