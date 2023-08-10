import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData, postData, putData, deleteData } from '@utils/fetch';

export const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
  try {
    const res = await getData(`/users`);
		// console.log('companies', res.data.data.result)
    return res.data.data.result;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

// Tambahkan perubahan serupa untuk tiga fungsi lainnya (addCompany, updateCompany, deleteCompany)

export const addCompany = createAsyncThunk('companies/addCompany', async (companyData) => {
  try {
    const response = await postData('/users', companyData);
    return response.data.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const updateCompany = createAsyncThunk('companies/updateCompany', async ({ id, companyData }) => {
  try {
    const response = await putData(`/users/${id}`, companyData);
    return response.data.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const deleteCompany = createAsyncThunk('companies/deleteCompany', async (id) => {
  try {
    await deleteData(`/users/${id}`);
    return id;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const fetchCompanyById = createAsyncThunk('companies/fetchCompanyById', async (id) => {
  try {
    const response = await getData(`/users/${id}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});
