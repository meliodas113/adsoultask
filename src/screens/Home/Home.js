import React from "react";
import axios from "axios";
import { MdSettings } from "react-icons/md";

import "./Home.css";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import Card from "../../components/Card/Card";

class Home extends React.Component {
  //random color generator function as color of each company is not availabe in API
  generateColor() {
    return (
      "#" +
      Math.random()
        .toString(16)
        .substr(-6)
    );
  }

  state = {
    cards: []
  };

  componentDidMount() {
    //get all cards
    axios.get("/sample-app-list.json").then(res => {
      const fetchedCards = [];
      for (let key in res.data) {
        fetchedCards.push({
          ...res.data[key],
          id: key
        });
      }
      this.setState({ cards: fetchedCards });
    });
  }
  render() {
    return (
      <div className="App">
        <div className="leftPanel">
          <div className="upperLeft">
            <div className="headerDiv">
              <span className="headerText">ADSOUL</span>
            </div>
            <div className="logoDiv">
              <div className="logo"></div>
            </div>
          </div>
          <div className="lowerLeft">
            <div className="headerDiv">
              <span className="headerText">Revenue Optimization</span>
            </div>
            <div className="logoDiv">
              <div className="logoSec">
                <div
                  className="logo"
                  style={{ backgroundImage: `url(${icon1})` }}
                ></div>
                <span className="logoDes">Fill Rate</span>
              </div>
              <div className="logoSec">
                <div
                  className="logo"
                  style={{ backgroundImage: `url(${icon2})` }}
                ></div>{" "}
                <span className="logoDes">Improve CTR</span>
              </div>{" "}
              <div className="logoSec">
                <div
                  className="logo"
                  style={{ backgroundImage: `url(${icon3})` }}
                ></div>{" "}
                <span className="logoDes">Refresh Rate</span>
              </div>{" "}
              <div className="logoSec">
                <div
                  className="logo"
                  style={{ backgroundImage: `url(${icon4})` }}
                ></div>{" "}
                <span className="logoDes">Quick Integration</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rightPanel">
          <div className="headerDiv">
            <span className="headerText">Apps</span>
            <span className="settingIcon">
              <MdSettings />
            </span>
          </div>
          <div className="cardDiv">
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                id={card.id}
                appName={card.appName}
                publisherName={card.publisherName}
                bgColor={this.generateColor()}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
