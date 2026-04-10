import { useState } from "react";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender
} from "@tanstack/react-table";
import data from "./data";


// const data = [

//   { id: 1, name: "Amit", subject: "Math", marks: 85 },
//   { id: 2, name: "Priya", subject: "Science", marks: 42 },
//   { id: 3, name: "Rohit", subject: "English", marks: 73 },
//   { id: 4, name: "Neha", subject: "Math", marks: 91 },
//   { id: 5, name: "Arjun", subject: "Science", marks: 67 },
//   { id: 6, name: "Sneha", subject: "English", marks: 58 },
//   { id: 7, name: "Raj", subject: "Math", marks: 77 },
//   { id: 8, name: "Pooja", subject: "Science", marks: 88 }

// ];



const columns = [

  {
    header: "ID",
    accessorKey: "id"
  },

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
  },

  {
    header: "Result",

    cell: ({ row }) => {

      const marks = row.original.marks;

      return marks >= 50 ? "Pass" : "Fail";

    }

  }

];


export default function DataTable(){

  const [globalFilter,setGlobalFilter] = useState("");


  const table = useReactTable({

    data,
    columns,

    state: {
      globalFilter
    },

    onGlobalFilterChange: setGlobalFilter,

    getCoreRowModel: getCoreRowModel(),

    getSortedRowModel: getSortedRowModel(),

    getFilteredRowModel: getFilteredRowModel(),

    getPaginationRowModel: getPaginationRowModel()

  });


  return(

    <div className="p-4">

      <h2 className="text-xl font-semibold mb-3">
        Advanced Table
      </h2>


      {/* search */}

      <input

        placeholder="Search..."

        value={globalFilter ?? ""}

        onChange={e => setGlobalFilter(e.target.value)}

        className="border rounded px-3 py-2 mb-3 w-64"

      />


      {/* table container */}

      <div className="h-[300px] overflow-auto border rounded">

        <table className="w-full border-collapse">

          {/* header */}

          <thead className="sticky top-0 bg-gray-100">

            {table.getHeaderGroups().map(headerGroup => (

              <tr key={headerGroup.id}>

                {headerGroup.headers.map(header => (

                  <th

                    key={header.id}

                    onClick={header.column.getToggleSortingHandler()}

                    className="border px-3 py-2 cursor-pointer text-left"

                  >

                    {flexRender(

                      header.column.columnDef.header,

                      header.getContext()

                    )}


                    {{

                      asc:" 🔼",

                      desc:" 🔽"

                    }[header.column.getIsSorted()] ?? null}


                  </th>

                ))}

              </tr>

            ))}

          </thead>



          {/* body */}

          <tbody>

            {table.getRowModel().rows.map(row => (

              <tr
                key={row.id}
                className="hover:bg-gray-50"
              >

                {row.getVisibleCells().map(cell => (

                  <td

                    key={cell.id}

                    className="border px-3 py-2"

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



      {/* pagination */}

      <div className="flex items-center gap-3 mt-3">

        <button

          onClick={()=>table.previousPage()}

          className="border px-3 py-1 rounded hover:bg-gray-100"

        >

          Prev

        </button>


        <span>

          Page {table.getState().pagination.pageIndex + 1}

        </span>


        <button

          onClick={()=>table.nextPage()}

          className="border px-3 py-1 rounded hover:bg-gray-100"

        >

          Next

        </button>

      </div>


    </div>

  );

}