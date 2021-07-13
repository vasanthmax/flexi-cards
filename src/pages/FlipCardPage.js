import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlexiApiGet } from '../action/FlipCardGet';
import Tabletop from 'tabletop';
import FlipCard from '../components/flipCard';

const FlipCardGet = () => {
  const location = new URLSearchParams(window.location.search).get('id');
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FlexiApiGet(location));
  }, [location]);

  const selector = useSelector((state) => state.flipgetReducer.flipcard?.data);

  console.log(selector);
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
  data.filter((ch) => ch.visiblity === 'yes');
  return (
    <div className='Flip-get'>
      {data
        .filter((ch) => ch.visiblity === 'yes')
        .map((ch) => {
          return (
            <FlipCard
              Name={ch[selector.namekey]}
              Title={ch[selector.titlekey]}
              Price={ch[selector.pricekey]}
              Description={ch[selector.descriptionkey]}
              Goto={ch[selector.gotokey]}
              Photo={ch[selector.photokey]}
              flipTitleSize={selector.titlesize}
              flipTitleColor={selector.titlecolor}
              FlipNameColor={selector.namecolor}
              FlipNameSize={selector.namesize}
              FlipCardColor={selector.cardcolor}
              FlipPriceColor={selector.pricecolor}
              FlipPriceSize={selector.pricesize}
              FlipDescriptionColor={selector.descriptioncolor}
              FlipDescriptionSize={selector.descriptionsize}
              FlipButtonColor={selector.buttoncolor}
              FlipButtonTextColor={selector.buttontextcolor}
              FlipFont={selector.textfont}
            ></FlipCard>
          );
        })}
    </div>
  );
};

export default FlipCardGet;
