import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
};

const insertIntoDB = ({ name, email, password }) => {
  axios.post("http://localhost:3000/users", {
    name,
    email,
    password,
  });
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    return response.data;
  } catch (error) {
    console.log("Got error when trying to fetch users:", error);
    throw error;
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    },
    getUsers: (state) => {
      return state;
    },
    insertUserIntoDatabase: (...payload) => {
      const action = payload[1];
      insertIntoDB(action.payload);
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const {
  addUser,
  getUsers,
  getUsersFromDatabase,
  insertUserIntoDatabase,
} = usersSlice.actions;

export default usersSlice.reducer;
