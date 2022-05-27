import React from "react";

import TableDetails from "../../Components/ApproveMonthlyPayment/TableDetails/TableDetails.jsx";

import styled from './index.module.css';

export default function ApproveMonthlyPayment() {

  // Database records as a object like this
  const records = [
    {
      id: "ID",
      name: "Name",
      date: "Date",
      month: "Month",
      special_notes: "Special Notes",
      receipt: "Receipt",
    },
    {
      id: 111,
      name: "Kasun",
      date: "2012-12-12",
      month: "Month",
      special_notes: "I want to loose weight",
      receipt: "Receipt"
    },
    {
      id: 222,
      name: "Amal",
      date: "2012-12-12",
      month: "Month",
      special_notes: "I want to loose weight",
      receipt: "Receipt"
    },
    {
      id: 333,
      name: "Amal",
      date: "2012-12-12",
      month: "Month",
      special_notes: "I want to loose weight",
      receipt: "Receipt"
    },
  ];

  return (
    <React.Fragment>
      <div className="container">
      <header className={styled['header']}>
        <h1> Pending Monthly Payments </h1>
      </header>
      <div className={styled['table-holder']}>
        {records.map((record) => {
          return (
            <TableDetails
              key={record["id"]}
              name={record["name"]}
              date={record["date"]}
              month={record["month"]}
              special_notes={record["special_notes"]}
              receipt={record["receipt"]}
            />
          );
        })}
      </div>
      </div>

    </React.Fragment>
  );
}
