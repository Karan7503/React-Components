import { useState } from "react";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function SelectExample(){

  const [role,setRole] = useState("");

  return(

    <FormControl sx={{ width:200 }}>

      <InputLabel>
        Role
      </InputLabel>

      <Select

        value={role}

        label="Role"

        onChange={(e)=>setRole(e.target.value)}

      >

        <MenuItem value="admin">
          Admin
        </MenuItem>

        <MenuItem value="employee">
          Employee
        </MenuItem>

      </Select>

    </FormControl>

  );

}