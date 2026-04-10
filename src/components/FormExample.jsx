import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function FormExample() {

  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300
      }}
    >

      <TextField
        label="Name"
        variant="outlined"
      />

      <TextField
        label="Email"
        type="email"
      />

      <Button
        variant="contained"
      >
        Submit
      </Button>

    </Box>

  );

}