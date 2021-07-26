import axios from 'axios';
export const UpdateCards = (id, cardType, cardDetails) => {
  return async function (dispatch) {
    const card = await axios.patch(
      `http://flexicards-env.eba-emjxy3hj.us-east-2.elasticbeanstalk.com/cards/${cardType.toLowerCase()}cardupdate?id=${id}`,
      cardDetails
    );
    console.log(card);
    dispatch({
      type: 'UPDATE_CARDS',
      payload: card.data,
    });
  };
};
