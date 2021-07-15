import axios from 'axios';
import { PricingCardAll } from './PricingCardAll';

export const FlipCardAll = () => {
  return async function (dispatch) {
    const card = await axios.get(`http://localhost:5000/cards/flipcardall`);
    const normalcard = await axios.get(
      `http://localhost:5000/cards/normalcardall`
    );
    const pricingcard = await axios.get(
      `http://localhost:5000/cards/pricingcardall`
    );
    dispatch({
      type: 'FLIPABLE_CARDS_ALL',
      payload: [card.data.data, normalcard.data.data, pricingcard.data.data],
    });
  };
};
