import React, { useEffect, useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";

import Welcome from "../components/Welcome";
import BookCard from "../components/Card";
import SampleCard from "../components/SampleCard";
import CategoryCard from "../components/CategoryCard";
import LogCard from "../components/LogCard";
import AddButton from "../components/AddButton";
import TotalExpense from "../components/HeroCard";
import TotalIncome from "../components/TotalIncome";

import { useFirebase } from "../context/Firebase";
import HeroPills from "../components/HeroPillExpense";
import HeroCard from "../components/HeroCard";
import DebitCard from "../components/DebitCard";

const Settings = () => {
  const firebase = useFirebase();

  const [books, setBooks] = useState([]);
  const [credits, setCredits] = useState([]);
  const [debits, setDebits] = useState([]);
  const [categories, setCategories] = useState([]);
  const [logs, setLogs] = useState([]);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const handleLogout = async () => {
    try {
      await firebase.logout();
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="flex">
      <div className="bg-[#05051f] min-h-screen min-w-screen p-3 md:p-4 items-center grid grid-cols-12 font-[Rubik] gap-3 w-screen">
        <div className="col-start-3 col-end-11 md:col-start-5 md:col-end-9">
          {/* <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Choose Year
          </label> */}
          <button
            type="button"
            className="text-white w-full bg-red-700 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300 ease-in-out"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
