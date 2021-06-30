import React, { useState } from "react";
import Tabletop from "tabletop";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Card from "../components/Card";
import { Collapse } from "antd";
import { Slider, Switch } from "antd";

const { Panel } = Collapse;

const UserArea = () => {
  const [cardColor, setCardColor] = useState("#ffffff");
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const [id, setId] = useState("");
  const [singleCard, setSinglecard] = useState();
  const [keys, setkey] = useState([]);
  const AvatarShape = ["Round", "Square", "Rounded square"];
  const defaultShape = AvatarShape[0];
  const [avatar, setAvatarShape] = useState(defaultShape);
  const [nameColor, setnameColor] = useState("#000000");
  const [nameSize, setnameSize] = useState("21");
  const [positionColor, setpositionColor] = useState("#777777");
  const [positionSize, setpositionSize] = useState("18");
  const [titleSize, setTitleSize] = useState("21");
  const [titleColor, setTitleColor] = useState("#000000");
  const [reviewSize, setReviewSize] = useState("17");
  const [reviewColor, setReviewColor] = useState("#777777");
  const [serviceColor, setServiceColor] = useState("#000000");
  const [serviceSize, setServiceSize] = useState("14");
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
    "https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png"
  );
  console.log(keys);
  const fontoptions = [
    "Poppins",
    "monospace",
    "Georgia",
    "Times New Roman",
    "Arial",
    "Papyrus",
  ];
  const fontdefault = fontoptions[0];
  const [fontname, Setfont] = useState(fontdefault);
  return (
    <div className="userarea">
      <div className="navigation">
        <div className="nav-left">
          <p className="nav-title">User Area</p>
        </div>
        <button className="button-help">
          Help <span>i</span>
        </button>
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
          {singleCard ? (
            <div className="design-area">
              <Collapse accordion>
                <Panel header="Card Color" key="1">
                  <p>Color</p>
                  <input
                    value={cardColor}
                    type="color"
                    name=""
                    id=""
                    onChange={(e) => {
                      setCardColor(e.target.value);
                    }}
                  />
                </Panel>
                <Panel header="Avatar Customize" key="2">
                  <p>Shape</p>
                  <Dropdown
                    options={AvatarShape}
                    onChange={(e) => {
                      setAvatarShape(e.value);
                    }}
                    value={avatar}
                    placeholder={"Select an option"}
                  />
                </Panel>
                <Panel header="Name Customize" key="3">
                  <p>Color</p>
                  <input
                    value={nameColor}
                    type="color"
                    name=""
                    id=""
                    onChange={(e) => {
                      setnameColor(e.target.value);
                    }}
                  />
                  <p>Font Size</p>
                  <Slider
                    defaultValue={parseInt(nameSize)}
                    onChange={(value) => {
                      setnameSize(value.toString());
                    }}
                  />
                </Panel>
                <Panel header="Position Customize" key="4">
                  <p>Color</p>
                  <input
                    type="color"
                    name=""
                    id=""
                    value={positionColor}
                    onChange={(e) => {
                      setpositionColor(e.target.value);
                    }}
                  />
                  <p>Font Size</p>
                  <Slider
                    defaultValue={parseInt(positionSize)}
                    onChange={(value) => {
                      setpositionSize(value.toString());
                    }}
                  />
                </Panel>
                <Panel header="Title Customize" key="5">
                  <p>Color</p>
                  <input
                    type="color"
                    name=""
                    id=""
                    value={titleColor}
                    onChange={(e) => {
                      setTitleColor(e.target.value);
                    }}
                  />
                  <p>Font Size</p>
                  <Slider
                    defaultValue={parseInt(titleSize)}
                    onChange={(value) => {
                      setTitleSize(value.toString());
                    }}
                  />
                </Panel>
                <Panel header="Review Customize" key="6">
                  <p>Color</p>
                  <input
                    type="color"
                    name=""
                    id=""
                    value={reviewColor}
                    onChange={(e) => {
                      setReviewColor(e.target.value);
                    }}
                  />
                  <p>Font Size</p>
                  <Slider
                    defaultValue={parseInt(reviewSize)}
                    onChange={(value) => {
                      setReviewSize(value.toString());
                    }}
                  />
                </Panel>
                <Panel header="Service Customize" key="7">
                  <p>Color</p>
                  <input
                    type="color"
                    name=""
                    id=""
                    value={serviceColor}
                    onChange={(e) => {
                      setServiceColor(e.target.value);
                    }}
                  />
                  <p>Font Size</p>
                  <Slider
                    defaultValue={parseInt(serviceSize)}
                    onChange={(value) => {
                      setServiceSize(value.toString());
                    }}
                  />
                </Panel>
                <Panel header="Font Customize" key="8">
                  <p>Font</p>
                  <Dropdown
                    options={fontoptions}
                    onChange={(e) => {
                      Setfont(e.value);
                    }}
                    value={fontname}
                    placeholder={"Select an option"}
                  />
                </Panel>
              </Collapse>
            </div>
          ) : (
            ""
          )}
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
          cardColor={cardColor}
          avatarShape={avatar}
          nameColor={nameColor}
          nameSize={nameSize}
          positionColor={positionColor}
          positionSize={positionSize}
          titleColor={titleColor}
          titleSize={titleSize}
          reviewColor={reviewColor}
          reviewSize={reviewSize}
          serviceColor={serviceColor}
          serviceSize={serviceSize}
          fontname={fontname}
        ></Card>
      </div>
    </div>
  );
};

export default UserArea;
