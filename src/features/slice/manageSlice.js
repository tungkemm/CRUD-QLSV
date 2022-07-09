import { createSlice } from "@reduxjs/toolkit";
import { dataStudent } from "../../data/students";

const initialState = {
  managerStudent: dataStudent,
};

const managerSlice = createSlice({
  name: "manager",
  initialState,
  reducers: {
    addDataManage: (state, action) => {
      state.managerStudent.push(action.payload);
    },
    deleteDataManage: (state, action) => {
      const newState = state.managerStudent.filter(
        (data) => data.id !== action.payload
      );
      state.managerStudent = newState;
    },
    updateDataManage: (state, action) => {
      const {
        id,
        username,
        classname,
        address,
        birthday,
        point,
        classification,
      } = action.payload;
      const newData = state.managerStudent.find((data) => data.id === id);
      if (newData) {
        newData.username = username;
        newData.classname = classname;
        newData.birthday = birthday;
        newData.address = address;
        newData.point = point;
        newData.classification = classification;
      }
    },
  },
});

export const { addDataManage, deleteDataManage, updateDataManage } = managerSlice.actions;

export default managerSlice.reducer;
