import { useState } from "react";

import Button from "@mui/material/Button";

import Snackbar from "@mui/material/Snackbar";

export default function SnackbarExample(){

  const [open,setOpen] = useState(false);

  return(

    <>

      <Button
        variant="contained"
        onClick={()=>setOpen(true)}
      >
        Show Alert
      </Button>


      <Snackbar

        open={open}

        message="Saved successfully"

        autoHideDuration={2000}

        onClose={()=>setOpen(false)}

      />

    </>

  );

}