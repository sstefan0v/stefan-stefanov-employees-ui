"use client";
import React from 'react';
import InputForm from "./InputForm"

class Employees extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="min-h-screen">
        <br></br>
        <InputForm  />
      </div>
    )
  }
}
export default Employees;