import axios from 'axios';

export const PricingCardAll = () => {
  return async function (dispatch) {
    const card = await axios.get(
      `http://flexicards-env.eba-emjxy3hj.us-east-2.elasticbeanstalk.com/cards/pricingcardall`
    );
    console.log(card);
    dispatch({
      type: 'PRICING_CARDS_ALL',
      payload: card.data,
    });
  };
};
