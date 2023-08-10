import { createSlice } from '@reduxjs/toolkit';
import {
	fetchCategories,
	addCategory,
	updateCategory,
	deleteCategory,
	fetchCategoryById
} from './Actions';

const categorySlice = createSlice({
	name: 'categories',
	initialState: {
		isLoading: false,
		isError: null,
		categories: []
	},
	reducers: {
		setCategories: (state, action) => {
			state.categories = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategories.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.isLoading = false;
				state.categories = action.payload;
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = action.error.message;
			})
			.addCase(addCategory.fulfilled, (state, action) => {
				state.categories.push(action.payload);
			})
			.addCase(updateCategory.fulfilled, (state, action) => {
				const updatedCategory = action.payload;
				const index = state.categories.findIndex((category) => category.id === updatedCategory.id);
				if (index !== -1) {
					state.categories = [...state.categories];
					state.categories[index] = updatedCategory;
				}
			})
			.addCase(deleteCategory.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteCategory.fulfilled, (state, action) => {
				const deletedCategoryId = action.payload;
				state.categories = state.categories.filter((category) => category.id !== deletedCategoryId);
				state.isLoading = false;
			})
			.addCase(deleteCategory.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = action.error.message;
			})
			.addCase(fetchCategoryById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchCategoryById.fulfilled, (state, action) => {
				state.isLoading = false;
				// Assuming the fetched category is stored in `action.payload`
				state.categories.push(action.payload);
			})
			.addCase(fetchCategoryById.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = action.error.message;
			});
	},
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;