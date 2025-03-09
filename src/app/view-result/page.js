"use client"
import React, { useEffect, useState } from 'react';

function Grid() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("jsonData");
    if (!!storedData) {
      setJsonData(JSON.parse(storedData));
    }
  }, []);

  return (

    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-between">
          <br></br>
          <label className="block mb-2 text-lg font-medium text-blue-900 ">
            This grid shows the longest days the fowlling employees worked together on a project:
          </label>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4 gap-4 p-4 bg-white shadow-lg rounded-lg">
          <div className="p-4 border rounded-lg text-center bg-blue-300">Employee #1</div>
          <div className="p-4 border rounded-lg text-center bg-blue-300">Employee #2</div>
          <div className="p-4 border rounded-lg text-center bg-blue-300">Project ID</div>
          <div className="p-4 border rounded-lg text-center bg-blue-300">Days worked </div>

          {jsonData.map((item, index) =>
            <>
              <div key={index + item?.emp1Id} className="p-4 border rounded-lg text-center bg-blue-100">
                {item?.emp1Id}
              </div>
              <div key={index + item?.emp2Id} className="p-4 border rounded-lg text-center bg-blue-100">
                {item?.emp2Id}
              </div>
              <div key={index + item?.projectId} className="p-4 border rounded-lg text-center bg-blue-100">
                {item?.projectId}
              </div>
              <div key={index + item?.lengthDays} className="p-4 border rounded-lg text-center bg-blue-100">
                {item?.lengthDays}
              </div>
            </>
          )}
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
        <Grid></Grid>
      </div>
    )
  }
}

export default Result;