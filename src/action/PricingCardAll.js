import axios from 'axios';

export const PricingCardAll = () => {
  return async function (dispatch) {
    const card = await axios.get(`http://localhost:5000/cards/pricingcardall`);
    console.log(card);
    dispatch({
      type: 'PRICING_CARDS_ALL',
      payload: card.data,
    });
  };
};
