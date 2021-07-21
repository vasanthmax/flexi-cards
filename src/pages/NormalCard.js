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
    <div className='normal-page'>
      <div className='normal-card'>
        {data.map((ch) => {
          return (
            <div className='col'>
              <Card
                Name={ch[selector.namekey]}
                Photo={ch[selector.photokey]}
                Review={ch[selector.reviewkey]}
                Title={ch[selector.titlekey]}
                Ratings={ch[selector.ratingskey]}
                Companylogo={ch[selector.logokey]}
                Service={ch[selector.servicekey]}
                Position={ch[selector.positionkey]}
                cardColor={selector.cardcolor}
                avatarShape={selector.avatarshape}
                nameColor={selector.namecolor}
                nameSize={selector.namesize}
                positionColor={selector.positioncolor}
                positionSize={selector.positionsize}
                titleColor={selector.titlecolor}
                titleSize={selector.titlesize}
                reviewColor={selector.reviewcolor}
                reviewSize={selector.reviewsize}
                serviceColor={selector.servicecolor}
                serviceSize={selector.servicesize}
                fontname={selector.fontname}
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NormalCardGet;
