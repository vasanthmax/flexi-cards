import axios from 'axios';

export const FlexiNormalApiGet = (id) => {
  return async function (dispatch) {
    const card = await axios.get(
      `http://flexicards-env.eba-emjxy3hj.us-east-2.elasticbeanstalk.com/cards/normal?id=${id}`
    );
    console.log(card);
    dispatch({
      type: 'NORMAL_CARDS_GET',
      payload: card.data,
    });
  };
};
