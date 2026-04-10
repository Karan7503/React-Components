import data from "./data";
import ReusableTable from "./ReusableTable";


// const data = [

//   { id: 1, name: "Amit", subject: "Math", marks: 85 },

//   { id: 2, name: "Priya", subject: "Science", marks: 42 },

//   { id: 3, name: "Rohit", subject: "English", marks: 73 }

// ];



const columns = [

  {

    header: "Name",

    accessorKey: "name"

  },

  {

    header: "Subject",

    accessorKey: "subject"

  },

  {

    header: "Marks",

    accessorKey: "marks"

  }

];


function StudentTable(){

  return (

    <ReusableTable

      data={data}

      columns={columns}

    />

  );

}


export default StudentTable;