import { useState } from "react";

import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";

import DialogTitle from "@mui/material/DialogTitle";

export default function DialogExample(){

  const [open,setOpen] = useState(false);

  return(

    <>

      <Button
        variant="contained"
        onClick={()=>setOpen(true)}
      >
        Open Dialog
      </Button>


      <Dialog

        open={open}

        onClose={()=>setOpen(false)}

      >

        <DialogTitle>

          Hello from Dialog

        </DialogTitle>

      </Dialog>

    </>

  );

}