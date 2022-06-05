import React,{useState,useEffect} from "react";

import TableRecord from "../../Components/AddMealPlan/TableRecord/TableRecord.js";

import styled from './index.module.css';
import {mealRequestList} from '../../services/mealPlanService'
export default function AddMealPlanPage() {

const [records,setRecords]=useState([]);
useEffect(() => {
  async function getMealReqest() {
    const result = await mealRequestList();
    setRecords(result.data);
  }

  getMealReqest();
});
  return (
    <React.Fragment>
      <div className={`container`}>
      <header className={styled['header']}>
        <h1> Meal Plan Requests</h1>
      </header>
      <div className={styled['table-holder']}>
        <div className={`${styled["table-record"]}`}>
          <div className={`row`}>
            <div className={`col-2 ${styled["data"]}`}>Name</div>
            <div className={`col-2 ${styled["data"]}`}>
              Date
            </div>
            <div className={`col-1 ${styled["data"]} `}>
              Current <br /> Weight
            </div>
            <div className={`col-1 ${styled["data"]}`}>
              Target <br /> Weight
            </div>
            <div className={`col-4 ${styled["data"]} `}>
              Comments
            </div>
            <div className={`col-2 ${styled["data"]}`}>
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
              date={record["req_date"]}
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
