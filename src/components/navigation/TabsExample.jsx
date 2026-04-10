import { useState } from "react";

import Box from "@mui/material/Box";

import Tabs from "@mui/material/Tabs";

import Tab from "@mui/material/Tab";

import BarChart from "../charts/BarChart";

import PieChart from "../charts/PieChart";

import LineChart from "../charts/LineChart";


export default function TabsExample(){

  const [value,setValue] = useState(0);


  return(

    <Box sx={{ width:"100%" }}>

      <Tabs

        value={value}

        onChange={(e,newValue)=>setValue(newValue)}

      >

        <Tab label="Bar Chart" />

        <Tab label="Pie Chart" />

        <Tab label="Line Chart" />

      </Tabs>



      <Box sx={{ padding:3 }}>

        {value===0 && <BarChart/>}

        {value===1 && <PieChart/>}

        {value===2 && <LineChart/>}

      </Box>

    </Box>

  );

}