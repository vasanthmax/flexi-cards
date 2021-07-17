import axios from 'axios';
export const UpdateCards = (id, cardType, cardDetails) => {
  return async function (dispatch) {
    const card = await axios.patch(
      `http://localhost:5000/cards/${cardType.toLowerCase()}cardupdate?id=${id}`,
      cardDetails
    );
    console.log(card);
    dispatch({
      type: 'UPDATE_CARDS',
      payload: card.data,
    });
  };
};
