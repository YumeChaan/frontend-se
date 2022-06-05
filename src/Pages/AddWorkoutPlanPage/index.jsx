import React from "react";

import TableRecord from "../../Components/AddWorkoutPlan/TableRecord/TableRecord.js";

import styled from './index.module.css';

export default function AddWorkoutPlanPage() {

  // Database records as a object like this
  const records = [
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
      <div className={`container`}>
        <header className={styled['header']}>
          <h1> Workout Plan Requests</h1>
        </header>
        <div className={styled['table-holder']}>
          <div className={`${styled["table-record"]}`}>
            <div className={`row`}>
              <div className={`col-2 ${styled["data"]}`}>Name</div>
              <div className={`col-2 ${styled["data"]}`}>
                Date
              </div>
              <div className={`col-1 ${styled["data"]} `}>
                Current Weight
              </div>
              <div className={`col-1 ${styled["data"]} `}>
                Target Weight
              </div>
              <div className={`col-4 ${styled["data"]} `}>
                Comments
              </div>
              <div className={`col-2 ${styled["data"]} `}>
                Status
              </div>
            </div>
          </div>
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
      </div>
    </React.Fragment>
  );
}
