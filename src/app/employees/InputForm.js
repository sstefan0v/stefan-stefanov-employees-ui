"use client";
import React, { useState } from "react";
import Constants from "../../components/Constants";
import { useRouter } from 'next/navigation';

const InputForm = () => {

  const [csvFile, setCsvFile] = useState("");
  const router = useRouter();

  const uploadFile = async () => {
    try {
      const fileBuffer = await csvFile.arrayBuffer();
  
      const response = await fetch(Constants.EMPLOYEES_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
        },
        body: fileBuffer,
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        localStorage.setItem("errorMessage", errorMessage);
        router.push("/error"); 
        return;
      }  
  
      const data = await response.text();
      localStorage.setItem("jsonData", data);
      router.push("/view-result");
  
    } catch (error) {    
      localStorage.setItem("errorMessage", '{"message":"An unexpected error.. '+ error +'"}');
      router.push("/error");
    }
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
                className="bg-blue-300 focus:outline-none font-medium rounded-lg sm:w-auto px-5 py-2.5 text-center "
              />
            </div>
          </div>
          <button onClick={uploadFile} className="bg-blue-300 hover:bg-blue-500 focus:outline-none font-medium rounded-lg sm:w-auto px-5 py-2.5 ">
            Check</button>
        </div>
      </div>
    </>
  )
}

export default InputForm;