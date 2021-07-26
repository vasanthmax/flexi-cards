import axios from 'axios';
import { PricingCardAll } from './PricingCardAll';

export const FlipCardAll = () => {
  return async function (dispatch) {
    const card = await axios.get(
      `http://flexicards-env.eba-emjxy3hj.us-east-2.elasticbeanstalk.com/cards/flipcardall`
    );
    const normalcard = await axios.get(
      `http://flexicards-env.eba-emjxy3hj.us-east-2.elasticbeanstalk.com/cards/normalcardall`
    );
    const pricingcard = await axios.get(
      `http://flexicards-env.eba-emjxy3hj.us-east-2.elasticbeanstalk.com/cards/pricingcardall`
    );
    dispatch({
      type: 'FLIPABLE_CARDS_ALL',
      payload: [card.data.data, normalcard.data.data, pricingcard.data.data],
    });
  };
};
