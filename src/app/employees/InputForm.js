"use client";
import React, { useState } from "react";
import Constants from "../../components/Constants";
import { useRouter } from 'next/navigation';

const InputForm = () => {

  const [csvFile, setCsvFile] = useState("");
  const router = useRouter();

  const uploadFile = async () => {
    const fileBuffer = await csvFile.arrayBuffer();

    const response = await fetch(Constants.EMPLOYEES_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: fileBuffer,
    });

    const data = await response.text();
    localStorage.setItem("jsonData", data);
    router.push("/view-result");
  };

  const handleFileChange = (event) => {
    const file = event.target?.files?.[0];
    if (!file) {
      return;
    }
    setCsvFile(file);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-between">
          <br></br>
          <label className="block mb-2 text-lg font-medium text-blue-900 "> Select a CSV file: <span className=" font-medium text-red-800 ">{csvFile?.name}</span> </label>
          <div className="grid gap-2 mb-2 md:grid-cols-1">
            <div>
              <input type="file" id="assetFile" accept=".csv" onChange={handleFileChange}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              />
            </div>
          </div>
          <button onClick={uploadFile} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Check</button>
        </div>
      </div>
    </>
  )
}

export default InputForm;