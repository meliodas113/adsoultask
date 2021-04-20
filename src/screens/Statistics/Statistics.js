import React, { useState, useEffect } from "react";
import "./Statistics.css";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { Link, withRouter, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Statistics() {
  //screen to display statistics of a particular company

  //to store details
  const [details, setDetails] = useState([]);

  //to store id of a company from redux
  const [ID, setID] = useState(0);

  //get respective details of a company from redux
  const name = useSelector(state => state.card.name);
  const publisher = useSelector(state => state.card.publisher);
  const bgColor = useSelector(state => state.card.bgColor);
  const id = useSelector(state => state.card.id);

  //to go back to home page in case of an error
  const history = useHistory();
  const handleClick = () => history.push("/");

  useEffect(() => {
    //set ID of company
    setID(id);
    if (name == "" || publisher == "") {
      //first check for some error before rendering
      alert("Select a Company");
      handleClick();
    } else {
      //fetch details
      const fetchData = async () => {
        const fetchedData = [];
        const result = await axios("/sample-all-app-stats(1).json");
        Object.values(result.data).map(item => fetchedData.push(item));
        setDetails(fetchedData);
      };

      fetchData();
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="headerDiv">
        <span className="headerText">ADSOUL</span>
      </div>
      <div className="tableDiv">
        <div className="detailsDiv">
          <Link
            style={{ marginLeft: "4%" }}
            to={{
              pathname: "/"
            }}
          >
            <span className="backBtn">
              <FaArrowLeft />
            </span>
          </Link>

          <div className="logo" style={{ background: bgColor }}></div>
          <div className="details">
            <span className="name">{name}</span>
            <span className="publisher">{publisher}</span>
          </div>
        </div>
        <div className="table">
          <table className="tableContent">
            <thead>
              <tr>
                <th>Date</th>
                <th>Revenue</th>
                <th>Ad Requests</th>
                <th>Ad Responses</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>Render Rate</th>
              </tr>
            </thead>
            <tbody>
              {details
                .filter(value => details.indexOf(value) == ID)
                .map(items => {
                  return items.map(item => {
                    return (
                      <tr key={item.revenue}>
                        <td>{item.date}</td>
                        <td>${item.revenue}</td>
                        <td>{item.adResponse}</td>
                        <td>{item.adRequest}</td>
                        <td>{item.impressions}</td>
                        <td>{item.clicks}</td>
                        <td>
                          {Math.round(
                            (item.adResponse / item.impressions) * 100
                          )}
                        </td>
                      </tr>
                    );
                  });
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Statistics);
