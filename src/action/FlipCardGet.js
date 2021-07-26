import axios from 'axios';
import { PricingCardAll } from './PricingCardAll';
export const FlexiApiGet = (id) => {
  return async function (dispatch) {
    const card = await axios.get(
      `http://flexicards-env.eba-emjxy3hj.us-east-2.elasticbeanstalk.com/cards/flip?id=${id}`
    );
    console.log(card);
    dispatch({
      type: 'FLIPABLE_CARDS_GET',
      payload: card.data,
    });
  };
};
