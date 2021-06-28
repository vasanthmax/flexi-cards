import React, { useState } from "react";
import Star from "../assets/star.png";

const Card = ({
  Photo,
  Ratings,
  Name,
  Position,
  Title,
  Review,
  Companylogo,
  Service,
}) => {
  const [readMore, setReadMore] = useState(false);
  const Stars = [];
  const star = Ratings.slice(0, 1);
  console.log(star);
  for (let i = 0; i < parseInt(star); i++) {
    Stars.push(<img src={Star} alt="" />);
  }
  return (
    <div className="endorsal-card">
      {Photo === "" ? "" : <img src={Photo} alt="" className="avatar" />}
      <div className="rating">{Stars}</div>
      <h3 className="name">{Name}</h3>
      <h4 className="place">{Position}</h4>
      <h3>{Title}</h3>
      {Review === "" ? (
        ""
      ) : (
        <p>
          {readMore === false ? Review.slice(0, 100) : Review}
          <span>
            {Review.length < 100 ? (
              ""
            ) : (
              <button onClick={() => setReadMore(true)}>Read More</button>
            )}
          </span>
        </p>
      )}
      {Companylogo === "" ? (
        ""
      ) : (
        <img src={Companylogo} alt="" className="logo" />
      )}
      <p className="review">{`Review for ${Service}`}</p>
    </div>
  );
};

export default Card;
