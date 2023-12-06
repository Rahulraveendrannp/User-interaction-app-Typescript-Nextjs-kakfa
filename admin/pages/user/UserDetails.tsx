import React, { useEffect, useState } from "react";
import { useContext } from "react";
import AppContext from "@/context/AppContext";

const UserDetails = () => {
  const [userLogs, setUserLogs] = useState([]);
  const [toggle, setToggle] = useState(true);
  const value = useContext(AppContext);
  const url="http://localhost:3030/admin"
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUserLogs(data.slice(0, 3));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  const showMore = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUserLogs(data);
        setToggle(!toggle)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const timeStanderdisation = (time: string) => {
    const utcDate = new Date(time);

    // Convert UTC to IST (Indian Standard Time)
    const istOptions = { timeZone: "Asia/Kolkata" };
    const istDateString = utcDate.toLocaleString("en-US", istOptions);
    return istDateString;
  };

  return (
    <div className="w-full mt-10 mb-10">
      <div className=" items-center p-1 mb-5 w-full">
        <h1 className=" w-[90%] m-auto font-bold text-3xl">User Logs </h1>
        <h1 className=" w-[90%] m-auto font-medium text-xl mt-2 text-red-900">
          User Name : {(value?.user as string).toUpperCase()}{" "}
        </h1>
      </div>

      {userLogs && userLogs.length > 0 ? (
        userLogs.map(
          (
            userLog: {
              _id: String;
              user: String;
              text: String;
              timestamp: Date;
            },
            index
          ) => (
            <ol className="relative w-[90%] m-auto border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {userLog?.text}{" "}
                  {index === 0 && (
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                      Latest
                    </span>
                  )}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {timeStanderdisation((userLog?.timestamp).toString())}
                </time>
              </li>
            </ol>
          )
        )
      ) : (
        <ol className="relative w-[90%] m-auto border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-6 flex items-center justify-center">
            <h5 className="font-bold text-xl text-red-600">Logs are empty</h5>
          </li>
        </ol>
      )}

      {(toggle && userLogs.length > 0) && <div className="flex justify-center items-center">
        <button className="bg-sky-900 text-white rounded-lg px-3 py-1 text-sm" onClick={showMore}>Show More</button>
      </div>}
      
    </div>
  );
};

export default UserDetails;
