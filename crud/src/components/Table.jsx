import React from 'react'
import { Link } from 'react-router-dom';
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Table = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-end p-8 w-full">
                <Link to='/add'>
                    <button className='p-2 px-4 bg-blue-400 rounded-md font-bold'>Add</button>
                </Link>
            </div>

            <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td scope="row" className="px-6 py-4">
                                Apple MacBook Pro 17"
                            </td>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                password
                            </td>
                            <td className="px-6 py-4 flex gap-2">
                                <button className="p-2 px-4 text-white text-xl grid place-items-center bg-blue-500 rounded-md"><FaEdit /></button>
                                <button className="p-2 px-4 text-white text-xl grid place-items-center bg-red-500 rounded-md"><MdDeleteSweep /></button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table