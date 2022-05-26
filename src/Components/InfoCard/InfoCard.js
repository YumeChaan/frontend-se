import React from "react";
import styled from "./InfoCard.module.css";

function InfoCard(props) {
  // This will render a given image
  const renderImage = (source) => {
    return (
      <React.Fragment>
        <img className={styled["image"]} src={require(`../../Resources/Images/${source}`)} alt="Fitness" />
      </React.Fragment>
    );
  };

  // This will render given info
  const renderInfo = (title, info) => {
    return (
      <div className={styled["info-container"]}>
        <div className={styled["info-title"]}>
          <h2>{title}</h2>
        </div>

        <p className={styled['info']}>{info}</p>
      </div>
    );
  };

  // There are two types of cards
  // 1 => cards with the image in the left side of the card
  // 0=> cards with the image is right side of the card
  const renderCard = (cardType, source, title, info) => {
    if (cardType === 0) {
      return (
        <div className={styled['card-container']}>
          {renderInfo( title ,  info )}
          {renderImage(source)}
        </div>
      );
    } else if (cardType === 1) {
      return (
        <div className={styled['card-container']}>
          {renderImage(source)}
          {renderInfo( title ,  info )}
        </div>
      );
    }
  };

  return (
    <div className={`${styled["info-card-container"]} ${props.className}`}>
      {renderCard(props.cardType, props.name, props.title, props.info)}
    </div>
  );
}

export default InfoCard;
