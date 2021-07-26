import axios from 'axios';

export const FlexiPricingApi = (cardDetails) => {
  return async function (dispatch) {
    const card = await axios.post(
      'http://flexicards-env.eba-emjxy3hj.us-east-2.elasticbeanstalk.com/cards/pricingcard',
      cardDetails
    );
    console.log(card);
    dispatch({
      type: 'PRICING_CARDS',
      payload: card.data._id,
    });
  };
};
