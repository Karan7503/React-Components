import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './top100Films';
import countries from "./countries"

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
    //   options={top100Films}
      options={countries}

      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}