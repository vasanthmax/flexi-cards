import axios from 'axios';

export const FlexiPricingApi = (cardDetails) => {
  return async function (dispatch) {
    const card = await axios.post(
      'http://localhost:5000/cards/pricingcard',
      cardDetails
    );
    console.log(card);
    dispatch({
      type: 'PRICING_CARDS',
      payload: card.data._id,
    });
  };
};
