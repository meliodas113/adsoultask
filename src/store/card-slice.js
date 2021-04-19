import { createSlice } from "@reduxjs/toolkit";
//set up redux
const cardSlice = createSlice({
  name: "card",
  initialState: {
    name: "",
    publisher: "",
    bgColor: "",
    id: false
  },
  reducers: {
    addCard(state, action) {
      const newCard = action.payload;
      state.name = newCard.name;
      state.publisher = newCard.publisher;
      state.bgColor = newCard.bgColor;
      state.id = parseInt(newCard.id);
    },
    removeCard(state, action) {
      state.name = "";
      state.publisher = "";
      state.bgColor = "";
      state.id = "";
    }
  }
});

export const cardActions = cardSlice.actions;

export default cardSlice;
