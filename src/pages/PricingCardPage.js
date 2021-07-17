import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlexiPricingApiGet } from '../action/PricingCardGet';
import Tabletop from 'tabletop';
import PricingCard from '../components/pricingCard';
const PricingCardGet = () => {
  const location = new URLSearchParams(window.location.search).get('id');
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FlexiPricingApiGet(location));
  }, [location]);

  const selector = useSelector(
    (state) => state.pricinggetReducer.pricingcard?.data
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

  console.log(data);

  return (
    <div className='pricing'>
      {data.map((ch) => {
        console.log(ch?.pricingcardcolor);
        return (
          <PricingCard
            planName={ch[selector.plannamekey]}
            planPrice={ch[selector.planpricekey]}
            planLink={ch[selector.planlinkkey]}
            planfeature1={ch[selector.planfeature1key]}
            planfeature2={ch[selector.planfeature2key]}
            planfeature3={ch[selector.planfeature3key]}
            planfeature4={ch[selector.planfeature4key]}
            planfeature5={ch[selector.planfeature5key]}
            PricingCardColor={selector.pricingcardcolor}
            PricingPlanColor={selector.princingplancolor}
            PricingPlanSize={selector.pricingplansize}
            PricingPriceColor={selector.pricingpricecolor}
            PricingPriceSize={selector.pricingpricesize}
            PricingButtonColor={selector.pricingbuttoncolor}
            PricingButtonTextColor={selector.pricingbuttontextcolor}
            PricingFeatureColor={selector.pricingfeaturecolor}
            PricingFeatureSize={selector.princingfeaturesize}
            PricingFont={selector.pricingfont}
          ></PricingCard>
        );
      })}
    </div>
  );
};

export default PricingCardGet;
