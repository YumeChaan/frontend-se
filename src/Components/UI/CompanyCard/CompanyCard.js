import React from "react";
import styled from "./CompanyCard.module.css";

function CompanyCard(props) {
  return (
    <div className={styled["company-card"]}>
      <img
      src={require("../../../Resources/Images/company-logo.png")}
        alt="24/7 Fitness"
        className={styled["company-logo"]}
      />

      <label className={styled['company-name']}><span className={styled["company-name-span"]}>24/7</span> Fitness</label>
    </div>
  );
}

export default CompanyCard;
