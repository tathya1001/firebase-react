import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormNew() {
  return (
    <div className="bg-slate-900 ">
      <div className="container flex flex-col justify-center items-center h-screen font-[Rubik]">
        <h2 className="text-white mb-4">Enter into Arena</h2>
        <Form className="columns-md flex-col space-y-3 ">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative">
              <input
                type="text"
                id="floating_outlined1"
                className="block px-2.5 pb-2.5 pt-2.5 w-full text-md text-white bg-transparent rounded-lg border-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                placeholder=" "
              />

              <label
                htmlFor="floating_outlined"
                className="absolute text-slate-300 bg-slate-900 text-md duration-300 transhtmlForm -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                First Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="floating_outlined1"
                className="block px-2.5 pb-2.5 pt-2.5 w-full text-md text-white bg-transparent rounded-lg border-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                placeholder=" "
              />

              <label
                htmlFor="floating_outlined"
                className="absolute text-slate-300 bg-slate-900 text-md duration-300 transhtmlForm -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Last Name
              </label>
            </div>
          </div>

          <div className="relative">
            <input
              type="email"
              id="floating_outlined2"
              className="block px-2.5 pb-2.5 pt-2.5 w-full text-md text-white bg-transparent rounded-lg border-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
              placeholder=" "
            />

            <label
              htmlFor="floating_outlined"
              className="absolute text-slate-300 bg-slate-900 text-md duration-300 transhtmlForm -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="floating_outlined3"
              className="block px-2.5 pb-2.5 pt-2.5 w-full text-md text-white bg-transparent rounded-lg border-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
              placeholder=" "
            />

            <label
              htmlFor="floating_outlined"
              className="absolute text-slate-300 bg-slate-900 text-md duration-300 transhtmlForm -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              College Name
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="floating_outlined3"
              className="block px-2.5 pb-2.5 pt-2.5 w-full text-md text-white bg-transparent rounded-lg border-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
              placeholder=" "
            />

            <label
              htmlFor="floating_outlined"
              className="absolute text-slate-300 bg-slate-900 text-md duration-300 transhtmlForm -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              College Roll Number
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <div className="md:w-[50%]">
              <label
                htmlFor="program-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Choose your program
              </label>
              <select
                id="program-name"
                className="w-100 border bg-transparent border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected className="text-white bg-slate-600">
                  B.Tech
                </option>
                <option value="mtech" className="text-white bg-slate-600">
                  M.Tech
                </option>
                <option value="bca" className="text-white bg-slate-600">
                  BCA
                </option>
                <option value="mca" className="text-white bg-slate-600">
                  MCA
                </option>
                <option value="other" className="text-white bg-slate-600">
                  Other
                </option>
              </select>
            </div>

            <div className="md:w-[50%]">
              <label
                htmlFor="year"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Choose Year
              </label>
              <select
                id="year"
                className="w-100 bg-transparent border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected className="text-white bg-slate-600">
                  1st
                </option>
                <option value="mtech" className="text-white bg-slate-600">
                  2nd
                </option>
                <option value="bca" className="text-white bg-slate-600">
                  3rd
                </option>
                <option value="mca" className="text-white bg-slate-600">
                  4rd
                </option>
              </select>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              id="floating_outlined4"
              className="block px-2.5 pb-2.5 pt-2.5 w-full text-md text-white bg-transparent rounded-lg border-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
              placeholder=" "
            />

            <label
              htmlFor="floating_outlined"
              className="absolute text-slate-300 bg-slate-900 text-md duration-300 transhtmlForm -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Phone Number
            </label>
          </div>

          <button
            type="button"
            className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-800 hover:via-blue-700 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}

export default FormNew;
