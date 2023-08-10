import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomTextField from '@components/mui/text-field'


const SearchInput = ({ name, query, onChange, disabled }) => {
  return (
    <CustomTextField
      fullWidth
			type='text'
			// name='query'
			name={name}
			disabled={disabled}
      value={query}
      onChange={onChange}
      placeholder='Search here ...'
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;

