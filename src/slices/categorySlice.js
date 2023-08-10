import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData, postData, putData, deleteData } from '@utils/fetch'; // Sesuaikan dengan path menuju file API Anda


// export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
// 	try {
// 		const response = await fetch('http://localhost:5000/categories');
// 		const json = await response.json();
// 		return json.data;
// 	} catch (error) {
// 		throw new Error('Failed to fetch categories.');
// 	}
// });

// export const addCategory = createAsyncThunk('categories/addCategory', async (categoryData) => {
// 	try {
// 		const response = await axios.post('http://localhost:5000/categories', categoryData);
// 		return response.data.data;
// 	} catch (error) {
// 		throw new Error('Failed to add category.');
// 	}
// });

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  try {
    const res = await getData(`/categories`);
		// console.log('res', res.data.data)
    return res.data.data;
  } catch (error) {
    return (error.response.data.msg);
  }
});

export const addCategory = createAsyncThunk('categories/addCategory', async (categoryData) => {
  try {
    const response = await postData('/categories', categoryData);
    console.log('add', response.data);
    return response.data.data;
  } catch (error) {
    console.log('err',error);
    throw error; // Menambahkan throw error untuk menampilkan pesan error dari server pada toast
  }
});

export const updateCategory = createAsyncThunk('categories/updateCategory', async ({ id, categoryData }) => {
  try {
    const response = await putData(`/categories/${id}`, categoryData);
    console.log('edit', response.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error; // Menambahkan throw error untuk menampilkan pesan error dari server pada toast
  }
});

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (id) => {
  try {
    await deleteData(`/categories/${id}`);
    console.log('delete', data.msg);
    return id;
  } catch (error) {
    console.log(error);
    throw error; // Menambahkan throw error untuk menampilkan pesan error dari server pada toast
  }
});

export const fetchCategoryById = createAsyncThunk('categories/fetchCategoryById', async (id) => {
  try {
    const response = await getData(`/categories/${id}`);
    return response.data.data;
  } catch (error) {
    return (error.response.data.msg);
  }
});

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
