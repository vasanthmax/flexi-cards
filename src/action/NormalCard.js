import axios from 'axios';

export const FlexiNormalApi = (cardDetails) => {
  return async function (dispatch) {
    const card = await axios.post(
      'http://flexicards-env.eba-emjxy3hj.us-east-2.elasticbeanstalk.com/cards/normalcard',
      cardDetails
    );
    console.log(card);
    dispatch({
      type: 'NORMAL_CARDS',
      payload: card.data._id,
    });
  };
};
