"use client"
import React, { useEffect, useState } from 'react';

function Error() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("errorMessage");
    if (!!storedData) {
      try {
        setJsonData(JSON.parse(storedData));
      } catch (error) {
        setJsonData(storedData);
        localStorage.setItem("errorMessage", { "message": "An unexpected error.. " });
      }
    }
  }, []);

  return (

    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-between">
          <br></br>
          <label className="block mb-2 text-lg font-medium text-blue-900 ">
            Error... {jsonData?.error}; {jsonData?.message}
          </label>
        </div>
      </div>
    </>
  );
}

class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="min-h-screen">
        <Error></Error>
      </div>
    )
  }
}

export default Result;