import React from "react";

import TableRecord from "../../Components/AddMealPlan/TableRecord/TableRecord.js";

import styled from './index.module.css';

export default function AddMealPlanPage() {

  // Database records as a object like this
  const records = [
    {
      id: "ID",
      name: "Name",
      date: "Date",
      current_weight: "Current Weight",
      target_weight: "Target Weight",
      other_comments: "Comments",
      status: "Status",
    },
    {
      id: 111,
      name: "Kasun",
      date: "2012-12-12",
      current_weight: "80kg",
      target_weight: "72kg",
      other_comments: "I want to loose weight",
      status: "plan not added",
    },
    {
      id: 222,
      name: "Amal",
      date: "2012-12-12",
      current_weight: "82kg",
      target_weight: "70kg",
      other_comments: "I want to loose weight",
      status: "plan not added",
    },
  ];

  return (
    <React.Fragment>
      <header className={styled['header']}>
        <h1> Meal Plan Requests</h1>
      </header>
      <div className={styled['table-holder']}>
        {records.map((record) => {
          return (
            <TableRecord
              key={record["id"]}
              name={record["name"]}
              date={record["date"]}
              current_weight={record["current_weight"]}
              target_weight={record["target_weight"]}
              other_comments={record["other_comments"]}
              status={record["status"]}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}
