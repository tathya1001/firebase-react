import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Accomodation() {
  return (
    <div className="bg-slate-900 ">
      <div className="container flex flex-col justify-center items-center h-screen font-[Rubik]">
        <h2 className="text-white mb-4">Enter into Arena</h2>
        <Form className="columns-md flex-col space-y-3 ">
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
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="number"
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

          <div className="relative">
            <input
              type="text"
              id="floating_outlined5"
              className="block px-2.5 pb-2.5 pt-2.5 w-full text-md text-white bg-transparent rounded-lg border-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
              placeholder=" "
            />

            <label
              htmlFor="floating_outlined"
              className="absolute text-slate-300 bg-slate-900 text-md duration-300 transhtmlForm -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Transaction Id
            </label>
          </div>
          <p className="text-rose-400 ">Send money into SampleUPIid</p>

          <label
            class="block text-sm font-medium text-gray-900 dark:text-white"
            for="file_input"
          >
            Upload file
          </label>
          <input
            class="w-full text-md text-gray-900 rounded-lg border-2 border-slate-400 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />

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

export default Accomodation;
