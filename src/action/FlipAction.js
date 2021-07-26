import axios from 'axios';

export const FlexiApi = (cardDetails) => {
  return async function (dispatch) {
    const card = await axios.post(
      'http://flexicards-env.eba-emjxy3hj.us-east-2.elasticbeanstalk.com/cards/flipcard',
      cardDetails
    );
    console.log(card);
    dispatch({
      type: 'FLIPABLE_CARDS',
      payload: card.data._id,
    });
  };
};
