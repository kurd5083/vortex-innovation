import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	stateModal: false,
	idProduct: null,
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		openModal: (state, action) => {
			state.stateModal = true;
			state.idProduct = action.payload;
			document.body.style.overflow = "hidden";
		},
		closeModal: (state) => {
			state.stateModal = false;
			state.idProduct = null;
			document.body.style.overflow = "";
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;