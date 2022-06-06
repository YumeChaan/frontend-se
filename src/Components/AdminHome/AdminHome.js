import React from "react";

import StatCard from "./StatCard/StatCard";

import styled from "./AdminHome.module.css";

function AdminHome(props) {
  return (
    <div className={styled["main"]}>
      <header>
        <h1>{props.admin_name}</h1>
        <h4>{props.admin_id}</h4>
      </header>
      <section className={styled['card-container']}>
          <StatCard title="Members" data={props.members} />
          <StatCard title="Admins" data={props.admins} />
          <StatCard title="Payments" data={props.payments} />
          <StatCard title="Meal Plan Requests" data={props.meal_plans} />
          <StatCard title="Workout Plan Requests" data={props.workout_plans} />
      </section>
    </div>
  );
}

export default AdminHome;
