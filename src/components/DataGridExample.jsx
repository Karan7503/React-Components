import { DataGrid } from "@mui/x-data-grid";

const rows = [

  { id:1, name:"Amit", age:22 },

  { id:2, name:"Priya", age:24 }

];

const columns = [

  { field:"id", headerName:"ID", width:90 },

  { field:"name", headerName:"Name", width:150 },

  { field:"age", headerName:"Age", width:150 }

];

export default function DataGridExample(){

  return(

    <div style={{ height:300, width:"100%" }}>

      <DataGrid

        rows={rows}

        columns={columns}

      />

    </div>

  );

}