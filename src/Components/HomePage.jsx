import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



const HomePage = () => {

  const todos = [

  ];

  return (
    <div className="min-h-screen bg-linear-to-r from-[#575656] to-[#062e3f] flex items-center justify-center text-white px-4">
      <div className="bg-linear-to-t from-[#575656] to-[#062e3f] w-300 h-150 rounded-[20px] relative shadow-lg p-10">

        <h1 className="text-center text-6xl font-semibold mb-10">
          ToDo App
        </h1>

        <div className="flex justify-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Enter a task here"
            className="border border-gray-300 px-4 py-2 rounded outline-none w-100"
          />

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold shadow">
            SAVE
          </button>

          <button className="bg-orange-500 text-white px-6 py-2 rounded font-semibold shadow">
            <FaSearch />
          </button>

        </div>

        <table className="w-full table-fixed">

          <thead>
            <tr className="border-b text-white">
              <th className="text-left py-4 w-[10%]">No.</th>
              <th className="text-left py-4 w-[40%]">Todo Item</th>
              <th className="text-left py-4 w-[20%]">Status</th>
              <th className="text-left py-4 w-[30%]">Actions</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="py-6">
                <h1>1</h1>
              </td>

              <td className="py-6">
                <h1>Morning Task</h1>
              </td>

              <td className="py-6 text-orange-300">
                <h1>Pending</h1>
              </td>

              <td className="py-6 flex gap-3">
                <button className="bg-red-500 hover:bg-red-700 text-white px-5 py-2 rounded shadow">
                  DELETE
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white px-5 py-2 rounded shadow">
                  FINISHED
                </button>
              </td>
            </tr>

          </tbody>

        </table>

        <div className="flex items-center absolute left-100 bottom-0 gap-2 p-4 rounded-md">

          <button className="w-10 h-10 rounded-lg shadow flex items-center justify-center hover:bg-orange-500"><IoIosArrowBack />
          </button>

          <button className="w-10 h-10 bg-green-700 rounded-lg shadow">
            1
          </button>

          <button className="w-10 h-10 rounded-lg shadow hover:bg-green-700">
            2
          </button>

          <button className="w-10 h-10 rounded-lg shadow hover:bg-green-700">
            3
          </button>

          <button className="w-10 h-10 rounded-lg shadow hover:bg-green-700">
            4
          </button>

          <button className="w-10 h-10 rounded-lg shadow hover:bg-green-700">
            5
          </button>

          <button className="w-10 h-10 rounded-lg shadow flex text-bla items-center justify-center hover:bg-orange-500"><IoIosArrowForward />
          </button>

        </div>

      </div>

    </div>
  )
}

export default HomePage