import { createSlice } from '@reduxjs/toolkit';
import {
	fetchCompanies,
	addCompany,
	updateCompany,
	deleteCompany,
	fetchCompanyById
} from './Actions';

const companySlice = createSlice({
	name: 'categories',
	initialState: {
		isLoading: false,
		isError: null,
		companies: []
	},
	reducers: {
		setCompanies: (state, action) => {
			state.companies = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCompanies.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchCompanies.fulfilled, (state, action) => {
				state.isLoading = false;
				state.companies = action.payload;
			})
			.addCase(fetchCompanies.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = action.error.message;
			})
			.addCase(addCompany.fulfilled, (state, action) => {
				state.companies.push(action.payload);
			})
			.addCase(updateCompany.fulfilled, (state, action) => {
				const updatedCompany = action.payload;
				const index = state.companies.findIndex((company) => company.id === updatedCompany.id);
				if (index !== -1) {
					state.companies = [...state.companies];
					state.companies[index] = updatedCompany;
				}
			})
			.addCase(deleteCompany.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteCompany.fulfilled, (state, action) => {
				const deletedCompanyId = action.payload;
				state.companies = state.companies.filter((company) => company.id !== deletedCompanyId);
				state.isLoading = false;
			})
			.addCase(deleteCompany.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = action.error.message;
			})
			.addCase(fetchCompanyById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchCompanyById.fulfilled, (state, action) => {
				state.isLoading = false;
				// Assuming the fetched company is stored in `action.payload`
				state.companies.push(action.payload);
			})
			.addCase(fetchCompanyById.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = action.error.message;
			});
	},
});

export const { setCompanies } = companySlice.actions;
export default companySlice.reducer;