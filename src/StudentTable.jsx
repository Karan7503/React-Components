import {
  useReactTable,
  getCoreRowModel,
  flexRender
} from "@tanstack/react-table";

const data = [
  { name: "Amit", subject: "Math", marks: 85 },
  { name: "Priya", subject: "Science", marks: 42 },
  { name: "Rohit", subject: "English", marks: 73 },
  { name: "Neha", subject: "Math", marks: 91 }
];

const columns = [

  {
    header: "Student Name",
    accessorKey: "name"
  },

  {
    header: "Subject",
    accessorKey: "subject"
  },

  {
    header: "Marks",
    accessorKey: "marks"
  },

  {
    header: "Result",

    cell: ({ row }) => {

      const marks = row.original.marks;

      return marks >= 50
        ? "Pass"
        : "Fail";
    }

  },

  {
    header: "Grade",

    cell: ({ row }) => {

      const m = row.original.marks;

      if (m >= 90) return "A+";
      if (m >= 75) return "A";
      if (m >= 60) return "B";
      if (m >= 50) return "C";

      return "F";
    }

  }

];

function StudentTable() {

  const table = useReactTable({

    data,
    columns,

    getCoreRowModel: getCoreRowModel()

  });

  return (

    <div className="p-4">

      <h2 className="text-xl mb-3">
        Student Marks Table
      </h2>

      <table className="border w-full">

        <thead>

          {table.getHeaderGroups().map(headerGroup => (

            <tr key={headerGroup.id}>

              {headerGroup.headers.map(header => (

                <th
                  key={header.id}
                  className="border p-2 bg-gray-100"
                >

                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}

                </th>

              ))}

            </tr>

          ))}

        </thead>


        <tbody>

          {table.getRowModel().rows.map(row => (

            <tr key={row.id}>

              {row.getVisibleCells().map(cell => (

                <td
                  key={cell.id}
                  className="border p-2 text-center"
                >

                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}

                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default StudentTable;