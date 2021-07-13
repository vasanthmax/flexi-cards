import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlexiNormalApiGet } from '../action/NormalCardget';
import Tabletop from 'tabletop';
import Card from '../components/Card';
const NormalCardGet = () => {
  const location = new URLSearchParams(window.location.search).get('id');
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FlexiNormalApiGet(location));
  }, [location]);

  const selector = useSelector(
    (state) => state.normalgetReducer.normalcard?.data
  );

  useEffect(() => {
    if (selector) {
      Tabletop.init({
        key: selector.sheetid,
        simpleSheet: true,
      })

        .then((lol) => {
          setData([...lol]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selector]);

  // console.log(data);

  return (
    <div className='pricing'>
      {data.map((ch) => {
        return (
          <Card
            Name={ch[selector.namekey]}
            Photo={ch[selector.photokey]}
            Review={ch[selector.reviewkey]}
            Title={ch[selector.titlekey]}
            Ratings={ch[selector.ratingskey]}
            Companylogo={ch[selector.logokey]}
            Service={ch[selector.servicekey]}
            Position={ch[selector.positionkey]}
            cardColor={ch.cardcolor}
            avatarShape={ch.avatarshape}
            nameColor={ch.namecolor}
            nameSize={ch.namesize}
            positionColor={ch.positioncolor}
            positionSize={ch.positionsize}
            titleColor={ch.titlecolor}
            titleSize={ch.titlesize}
            reviewColor={ch.reviewcolor}
            reviewSize={ch.reviewsize}
            serviceColor={ch.servicecolor}
            serviceSize={ch.servicesize}
            fontname={ch.fontname}
          ></Card>
        );
      })}
    </div>
  );
};

export default NormalCardGet;
