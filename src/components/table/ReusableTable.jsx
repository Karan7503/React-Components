import { useState } from "react";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender
} from "@tanstack/react-table";


function ReusableTable({ data, columns }) {

  const [globalFilter, setGlobalFilter] = useState("");

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


  return (

    <div className="p-4 bg-white rounded-lg shadow">

      {/* search */}

      <input

        placeholder="Search..."

        value={globalFilter ?? ""}

        onChange={(e) => setGlobalFilter(e.target.value)}

        className="border px-3 py-2 rounded mb-3 w-64"

      />


      {/* table */}

      <div className="overflow-auto max-h-[350px] border rounded">

        <table className="w-full border-collapse">

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

                      asc: " 🔼",

                      desc: " 🔽"

                    }[header.column.getIsSorted()] ?? null}


                  </th>

                ))}

              </tr>

            ))}

          </thead>



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

          onClick={() => table.previousPage()}

          className="border px-3 py-1 rounded hover:bg-gray-100"

        >

          Prev

        </button>


        <span>

          Page {table.getState().pagination.pageIndex + 1}

        </span>


        <button

          onClick={() => table.nextPage()}

          className="border px-3 py-1 rounded hover:bg-gray-100"

        >

          Next

        </button>

      </div>

    </div>

  );

}

export default ReusableTable;