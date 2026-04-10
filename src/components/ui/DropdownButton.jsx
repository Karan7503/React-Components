import { useState } from "react";

import Button from "@mui/material/Button";

import Menu from "@mui/material/Menu";

import MenuItem from "@mui/material/MenuItem";


function DropdownButton(){

  const [anchorEl,setAnchorEl] = useState(null);


  const open = Boolean(anchorEl);


  const handleClick = (event) => {

    setAnchorEl(event.currentTarget);

  };


  const handleClose = () => {

    setAnchorEl(null);

  };


  return(

    <div>

      <Button

        variant="contained"

        onClick={handleClick}

      >

        Actions

      </Button>


      <Menu

        anchorEl={anchorEl}

        open={open}

        onClose={handleClose}

      >

        <MenuItem onClick={handleClose}>

          Edit

        </MenuItem>

        <MenuItem onClick={handleClose}>

          Delete

        </MenuItem>

        <MenuItem onClick={handleClose}>

          View

        </MenuItem>

      </Menu>

    </div>

  );

}

export default DropdownButton;