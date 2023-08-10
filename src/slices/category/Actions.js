import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData, postData, putData, deleteData } from '@utils/fetch';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async (lastId, thunkAPI) => {
  try {
		// const lastId = response.lastId;
    const res = await getData(`/categories/infinite?lastId=${lastId}&limit=10`);
    // const res = await getData(`/categories`);
		// console.log('categories', res.data.data)
    return res.data.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

// Tambahkan perubahan serupa untuk tiga fungsi lainnya (addCategory, updateCategory, deleteCategory)

export const addCategory = createAsyncThunk('categories/addCategory', async (categoryData) => {
  try {
    const response = await postData('/categories', categoryData);
    return response.data.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const updateCategory = createAsyncThunk('categories/updateCategory', async ({ id, categoryData }) => {
  try {
    const response = await putData(`/categories/${id}`, categoryData);
    return response.data.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (id) => {
  try {
    await deleteData(`/categories/${id}`);
    return id;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const fetchCategoryById = createAsyncThunk('categories/fetchCategoryById', async (id) => {
  try {
    const response = await getData(`/categories/${id}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});
