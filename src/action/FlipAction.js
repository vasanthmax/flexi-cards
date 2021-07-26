import axios from 'axios';

export const FlexiApi = (cardDetails) => {
  return async function (dispatch) {
    const card = await axios.post(
      'http://localhost:5000/cards/flipcard',
      cardDetails
    );
    console.log(card);
    dispatch({
      type: 'FLIPABLE_CARDS',
      payload: card.data._id,
    });
  };
};
