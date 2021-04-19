import React from "react";
import "./card.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cardActions } from "../../store/card-slice";
import { useDispatch } from "react-redux";

const Card = props => {
  //card component

  //send details to redux before going to next screen
  const dispatch = useDispatch();
  const addData = () => {
    dispatch(
      cardActions.addCard({
        name: props.appName,
        publisher: props.publisherName,
        bgColor: props.bgColor,
        id: props.id
      })
    );
  };

  return (
    <div className="card">
      <div className="cardSec">
        <div className="cardDes">
          <div className="cardLogo">
            <div
              className="logo"
              style={{ backgroundColor: props.bgColor }}
            ></div>
          </div>
          <div className="cardName">
            <span className="name">{props.appName}</span>
            <span className="publisher">{props.publisherName}</span>
          </div>
        </div>
        <div className="cardStat">
          <div className="stat">
            <span className="statDes">Revenue</span>
            <span className="statValue">$345</span>
          </div>
          <div className="stat">
            <span className="statDes">Ad Requests</span>
            <span className="statValue">34M</span>
          </div>{" "}
          <div className="stat">
            <span className="statDes">Ad Responses</span>
            <span className="statValue">10M</span>
          </div>{" "}
          <div className="stat">
            <span className="statDes">Impressions</span>
            <span className="statValue">10M</span>
          </div>
        </div>
      </div>
      <div className="buttonDiv">
        <Link
          style={{ marginTop: "20%" }}
          to={{
            pathname: "/statistics",
            cardProps: {
              id: props.id,
              name: props.appName,
              publisher: props.publisherName,
              bgColor: props.bgColor
            }
          }}
          onClick={addData}
        >
          <span className="arrowBtn">
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
