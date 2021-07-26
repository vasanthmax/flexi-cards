import axios from 'axios';

export const NormalCardAll = () => {
  return async function (dispatch) {
    const card = await axios.get(
      `http://flexicards-env.eba-emjxy3hj.us-east-2.elasticbeanstalk.com/cards/normalcardall`
    );
    console.log(card);
    dispatch({
      type: 'NORMAL_CARDS_ALL',
      payload: card.data,
    });
  };
};
