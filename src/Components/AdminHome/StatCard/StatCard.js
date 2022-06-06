import React from "react";
import { Card } from "react-bootstrap";
import styled from "./StatCard.module.css";

function StatCard(props) {
  return (
    <Card className={`${styled["main"]} ${props.className}`}>
      <Card.Body className={styled['container']}>
        
          <Card.Title className={styled["card-title"]}>
            {props.title}
          </Card.Title>
        

        
          <h1 className={styled["card-data"]}>{props.data}</h1>
      </Card.Body>
    </Card>
  );
}

export default StatCard;
