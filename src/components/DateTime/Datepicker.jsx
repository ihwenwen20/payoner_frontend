import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import LanguageSelector from './LanguageSelector';
import TimeZoneSelector from './TimeZoneSelector';
import 'react-datepicker/dist/react-datepicker.css';
import { en, id, es } from 'date-fns/locale'
import { registerLocale } from 'react-datepicker';
import CustomTextField from '@components/mui/text-field'
import DatePickerWrapper from '@app/styles/libs/react-datepicker'

const CustomInput = forwardRef((props, ref) => {
	return <CustomTextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const DateCustom = (props) => {
	const {control,onChange,locale } = props
	const [selectedLanguage, setSelectedLanguage] = useState('en');
	const [selectedTimeZone, setSelectedTimeZone] = useState('UTC');

	const handleLanguageChange = (event) => {
		setSelectedLanguage(event.target.value);
	};

	const handleTimeZoneChange = (event) => {
		setSelectedTimeZone(event.target.value);
	};

	const getLocale = () => {
		switch (selectedLanguage) {
			case 'en':
				return en;
			case 'id':
				return id;
			case 'es':
				return es;
			default:
				return en;
		}
	};

	registerLocale(selectedLanguage, getLocale()); // Register bahasa lokal sesuai dengan pilihan bahasa

	return (
		<>
			<LanguageSelector selectedLanguage={selectedLanguage} onChange={handleLanguageChange} />
			<TimeZoneSelector selectedTimeZone={selectedTimeZone} onChange={handleTimeZoneChange} />

			<DatePickerWrapper>
				<DatePicker
					selected={control}
					onChange={onChange}
					locale={selectedLanguage}
					// locale={locale}
					showYearDropdown
					showMonthDropdown
					placeholderText='MM/DD/YYYY'
					dateFormat='dd MMMM yyyy'
				/>
			</DatePickerWrapper>
		</>
	);
};

export default DateCustom;
