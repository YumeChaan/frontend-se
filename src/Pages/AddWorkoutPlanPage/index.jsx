import React from "react";

import TableRecord from "../../Components/AddWorkoutPlan/TableRecord/TableRecord.js";

import styled from './index.module.css';
import {workOutRequestList} from '../../services/workOutPlanService'
import { useState } from 'react';
import { useEffect } from 'react';
export default function AddWorkoutPlanPage() {

  // Database records as a object like this
  const [records,setRecords]=useState([]);
useEffect(() => {
  async function getworkoutlist() {
    const result = await workOutRequestList();
    setRecords(result.data);
  }

  getworkoutlist();
});

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
                id_={record["id"]}
                name={record["Name"]}
                date={record["date"]}
                current_weight={record["current_weight"]}
                target_weight={record["target_weight"]}
                other_comments={record["note"]}
                status={record["status"]}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
