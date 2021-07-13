import axios from 'axios';
import { PricingCardAll } from './PricingCardAll';

export const FlipCardAll = () => {
  return async function (dispatch) {
    const card = await axios.get(`http://localhost:5000/cards/flipcardall`);
    console.log(card);
    dispatch({
      type: 'FLIPABLE_CARDS_ALL',
      payload: card.data,
    });
  };
};
