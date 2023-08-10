import { useState } from 'react'

import {
	Box,
	Radio,
	RadioGroup,
	FormControl,
	FormLabel,
	FormControlLabel,
	FormHelperText,
	Grid,
	IconButton,
	InputAdornment,
	TextField,
	MenuItem,
	Checkbox,
	ListItemText,
} from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

// ** Custom Component Import
import CustomChip from '@components/mui/chip'
import CustomTextField from '@components/mui/text-field'
import Icon from '@components/icon'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
	PaperProps: {
		style: {
			width: 250,
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
		}
	}
}

export const FieldBasic = (props) => {
	const { control, errors, name, type, label, placeholder, InputProps } = props

	return (
		<FormControl fullWidth>
			{/* <Grid item xs={12} sm={6}> */}
			<Controller
				name={name}
				control={control}
				rules={{ required: true }}
				render={({ field: { value, onChange } }) => (
					<CustomTextField
						fullWidth
						type={type}
						value={value}
						label={label}
						onChange={onChange}
						placeholder={placeholder}
						error={Boolean(errors[name])}
						aria-describedby={name}
						InputProps={InputProps}
					// {...errors[name] && (
					// 	<FormHelperText sx={{ color: 'error.main' }} id={name}>
					// 		{...(errors[name].message)}
					// 	</FormHelperText>
					// )}
					/>
				)}
			/>
			{errors[name] && (
				<FormHelperText sx={{ color: 'error.main' }} id={name}>
					{errors[name].message.charAt(0).toUpperCase() + errors[name].message.slice(1)}
				</FormHelperText>
			)}
			{/* </Grid> */}
		</FormControl>
	)
}

export const FieldPassword = (props) => {
	const { control, errors, name, label, placeholder,
		sx, showStart, confirmPassword } = props

	const [showPassword, setShowPassword] = useState(false)

	const handleClickShowPassword = () => {
		// setShowPassword(showPassword ? false : true)
		setShowPassword((showPassword) => !showPassword);
	}

	return (
		<>
			<FormControl fullWidth>
				<Controller
					name={name}
					control={control}
					rules={{ required: true }}
					render={({ field: { value, onChange } }) => (
						<CustomTextField
							fullWidth
							type={showPassword ? 'text' : 'password'}
							value={value}
							label={label}
							onChange={onChange}
							sx={sx}
							placeholder={placeholder}
							error={Boolean(errors[name])}
							aria-describedby={name}
							InputProps={{
								startAdornment: showStart ? (
									<InputAdornment position='start'>
										<Icon fontSize='1.25rem' icon='clarity:key-solid' />
									</InputAdornment>
								) : null,
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											edge='end'
											onClick={handleClickShowPassword}
											onMouseDown={e => e.preventDefault()}
											aria-label='toggle password visibility'
										>
											<Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
					)}
				/>
				{errors[name] && (
					<FormHelperText sx={{ color: 'error.main' }} id={name}>
						{errors[name].message.charAt(0).toUpperCase() + errors[name].message.slice(1)}
					</FormHelperText>
				)}
			</FormControl>
		</>
	)
}

export const FieldTextArea = (props) => {
	const { control, errors, name, type, label, placeholder, InputProps,
		size } = props

	return (
		<FormControl fullWidth>
			<Controller
				name={name}
				control={control}
				rules={{ required: true }}
				render={({ field: { value, onChange } }) => (
					<CustomTextField
						rows={size}
						fullWidth
						multiline
						type={type}
						value={value}
						label={label}
						onChange={onChange}
						placeholder={placeholder}
						error={Boolean(errors[name])}
						aria-describedby={name}
						InputProps={InputProps}
					/>
				)}
			/>
			{errors[name] && (
				<FormHelperText sx={{ color: 'error.main' }} id={name}>
					{errors[name].message.charAt(0).toUpperCase() + errors[name].message.slice(1)}
				</FormHelperText>
			)}
		</FormControl>
	)
}

export const FieldTextArea2 = (props) => {
	const { control, errors, name, type, label, placeholder, InputProps,
		size } = props

	return (
		<FormControl fullWidth>
			<Controller
				name={name}
				control={control}
				rules={{ required: true }}
				render={({ field: { value, onChange } }) => (
					<TextField
						rows={size}
						fullWidth
						multiline
						type={type}
						value={value}
						label={label}
						onChange={onChange}
						placeholder={placeholder}
						error={Boolean(errors[name])}
						aria-describedby={name}
						InputProps={InputProps}
					/>
				)}
			/>
			{errors[name] && (
				<FormHelperText sx={{ color: 'error.main' }} id={name}>
					{errors[name].message.charAt(0).toUpperCase() + errors[name].message.slice(1)}
				</FormHelperText>
			)}
		</FormControl>
	)
}

export const FieldRadio = (props) => {
	const { control, errors, name, label, options } = props

	return (
		<FormControl fullWidth error={Boolean(errors[name])}>
			<FormLabel>{label}</FormLabel>
			<Controller
				name={name}
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<>
						<RadioGroup row {...field} aria-label={name} defaultValue=''>
							{options.map((option) => (
								<FormControlLabel
									key={option.value}
									value={option.value}
									label={option.label}
									control={<Radio />}
								/>
							))}
						</RadioGroup>
					</>
				)}
			/>
			{errors[name] && (
				<FormHelperText sx={{ mx: 0, color: 'error.main', fontSize: theme => theme.typography.body2.fontSize }} id={name}>
					{errors[name].message.charAt(0).toUpperCase() + errors[name].message.slice(1)}
					{/* {errorMessage || 'This field is required'} */}
				</FormHelperText>
			)}
		</FormControl>
	)
}

export const FieldSelect = (props) => {
	const { control, errors, name, SelectProps } = props

	return (
		<FormControl fullWidth>
			<Controller
				name={name}
				control={control}
				rules={{ required: true }}
				render={({ ...field }) => (
					<CustomTextField
						select
						fullWidth
						defaultValue=''
						error={Boolean(errors[name])}
						aria-describedby={name}
						SelectProps={SelectProps}
					>
						{value.map((option) => (
							<MenuItem key={option} value={option}>
								{option.charAt(0).toUpperCase() + option.slice(1)}
							</MenuItem>
						))}
					</CustomTextField>
				)}
			/>
			{errors[name] && (
				<FormHelperText sx={{ color: 'error.main' }} id={name}>
					{errors[name].message.charAt(0).toUpperCase() + errors[name].message.slice(1)}
				</FormHelperText>
			)}
		</FormControl>
	)
}

export const FieldMultiSelect = (props) => {
	const { control, errors, name, label, options, } = props

	return (
		<FormControl fullWidth>
			<Controller
				name={name}
				control={control}
				rules={{ required: true }}
				render={({ field: { value, onChange } }) => (
					<CustomTextField
						select
						fullWidth
						value={value}
						label={label}
						id={name}
						defaultValue=''
						onChange={onChange}
						error={Boolean(errors[name])}
						aria-describedby={name}
						// SelectProps={{
						// 	multiple: true,
						// 	value: Array.isArray(value) ? value : [],
						// 	onChange: e => onChange(e)
						// }}
						SelectProps={{
							MenuProps,
							multiple: true,
							value: Array.isArray(value) ? value : [],
							onChange: e => onChange(e),
							// renderValue: selected => selected.join(', ')
							renderValue: selected => (
								<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
									{selected.map(value => (
										<CustomChip key={value} label={value} sx={{ m: 0.75 }} skin='light' color='primary' />
									))}
								</Box>
							)
						}}
					>
						{options.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{/* {option.label} */}
								{/* <Checkbox checked={option.value.indexOf(option.label) > -1} /> */}
								<Checkbox checked={value.indexOf(option.value.toLowerCase()) > -1} />
								<ListItemText primary={option.value.charAt(0).toUpperCase() + option.value.slice(1)} />
							</MenuItem>
						))}
					</CustomTextField>
				)}
			/>
			{errors[name] && (
				<FormHelperText sx={{ color: 'error.main' }} id={name}>
					{errors[name].message.charAt(0).toUpperCase() + errors[name].message.slice(1)}
				</FormHelperText>
			)}
		</FormControl>
	)
}

export const CTextField = (props) => {
	const { control, errors, name, label, placeholder } = props

	return (
		<FormControl fullWidth>
			<Controller
				name={name}
				control={control}
				rules={{ required: true }}
				render={({ field: { value, onChange } }) => (
					<TextField
						value={value}
						label={label}
						onChange={onChange}
						placeholder={placeholder}
						error={Boolean(errors[name])}
						aria-describedby={name}
					/>
				)}
			/>
			{errors[name] && (
				<FormHelperText sx={{ color: 'error.main' }} id={name}>
					{errors[name].message}
				</FormHelperText>
			)}
		</FormControl>
	)
}
