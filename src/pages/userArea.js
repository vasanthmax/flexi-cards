import React, { useState } from "react";
import Tabletop from "tabletop";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Card from "../components/Card";
const UserArea = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const [id, setId] = useState("");
  const [singleCard, setSinglecard] = useState();
  const [keys, setkey] = useState([]);
  const dropdown2 = [
    "Photo",
    "Name",
    "Title",
    "Ratings",
    "Position",
    "Review",
    "Logo",
    "Service",
  ];
  const fetchData = () => {
    Tabletop.init({
      key: id.toString(),
      simpleSheet: true,
    })

      .then((lol) => {
        setSinglecard(lol[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (singleCard) {
    for (let value of Object.keys(singleCard)) {
      if (keys.findIndex((ch) => ch.key === value) === -1) {
        keys.push({ key: value });
      }
    }
  }
  const [Title, setTitle] = useState("Title");
  const [Photo, setPhoto] = useState(
    "https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
  );
  const [Review, setReview] = useState("review");
  const [Name, setName] = useState("Name");
  const [Ratings, setRatings] = useState("5");
  const [Position, setPosition] = useState("Position");
  const [Service, setService] = useState("Service");
  const [Logo, setLogo] = useState(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgetdefault.in%2Fabout-us%2F&psig=AOvVaw1ziy4YGrs7oErtjYe7m3Pi&ust=1624800093472000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKCggJWytfECFQAAAAAdAAAAABAV"
  );
  console.log(keys);

  return (
    <div className="userarea">
      <div className="header">
        <p className="user-title">User Area</p>
        <div className="help-section">
          <p>Help</p>
          <span>i</span>
        </div>
      </div>
      <div className="fetch-area">
        <label htmlFor="sheetid">Sheet Id</label>
        <div className="fetch-input">
          <input
            type="text"
            name="sheetid"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
          <button onClick={fetchData}>Fetch</button>
        </div>
      </div>
      <div className="card-type">
        <label htmlFor="cardtype">Card Type</label>
        <div className="card-select">
          <Dropdown
            arrowClassName="myArrowClassName"
            arrowClosed={<span className="arrow-closed" />}
            arrowOpen={<span className="arrow-open" />}
            options={options}
            onChange={""}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
      </div>
      <div className="work-area">
        <p className="workarea-title">Headings</p>
        <div className="headings">
          <div className="element-section">
            <div className="selector-section">
              {singleCard ? (
                keys.map((ch, index) => {
                  return (
                    <div className="selector">
                      <input type="text" readOnly value={ch.key} />
                      <div className="dropdown-section">
                        <Dropdown
                          arrowClassName="myArrowClassName"
                          arrowClosed={<span className="arrow-closed" />}
                          arrowOpen={<span className="arrow-open" />}
                          options={dropdown2}
                          onChange={(e) => {
                            if (e.value == "Title") {
                              const keyvalue = keys[index]["key"];
                              setTitle(singleCard[keyvalue]);
                            }
                            if (e.value == "Photo") {
                              const keyvalue = keys[index]["key"];
                              setPhoto(singleCard[keyvalue]);
                            }
                            if (e.value == "Review") {
                              const keyvalue = keys[index]["key"];
                              setReview(singleCard[keyvalue]);
                            }
                            if (e.value == "Name") {
                              const keyvalue = keys[index]["key"];
                              setName(singleCard[keyvalue]);
                            }
                            if (e.value == "Ratings") {
                              const keyvalue = keys[index]["key"];
                              setRatings(singleCard[keyvalue]);
                            }
                            if (e.value == "Logo") {
                              const keyvalue = keys[index]["key"];
                              setLogo(singleCard[keyvalue]);
                            }
                            if (e.value == "Position") {
                              const keyvalue = keys[index]["key"];
                              setPosition(singleCard[keyvalue]);
                            }
                            if (e.value == "Service") {
                              const keyvalue = keys[index]["key"];
                              setService(singleCard[keyvalue]);
                            }
                          }}
                          value={""}
                          placeholder="Select an option"
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>
                  {" "}
                  <div className="selector">
                    <input type="text" readOnly />
                    <div className="dropdown-section">
                      <Dropdown
                        arrowClassName="myArrowClassName"
                        arrowClosed={<span className="arrow-closed" />}
                        arrowOpen={<span className="arrow-open" />}
                        options={options}
                        onChange={""}
                        value={defaultOption}
                        placeholder="Select an option"
                      />
                    </div>
                  </div>
                  <div className="selector">
                    <input type="text" readOnly />
                    <div className="dropdown-section">
                      <Dropdown
                        arrowClassName="myArrowClassName"
                        arrowClosed={<span className="arrow-closed" />}
                        arrowOpen={<span className="arrow-open" />}
                        options={options}
                        onChange={""}
                        value={defaultOption}
                        placeholder="Select an option"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="CardArea">
        <Card
          Name={Name}
          Photo={Photo}
          Review={Review}
          Title={Title}
          Ratings={Ratings}
          Companylogo={Logo}
          Service={Service}
          Position={Position}
        ></Card>
      </div>
    </div>
  );
};

export default UserArea;
