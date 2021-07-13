import axios from 'axios';

export const FlexiNormalApi = (cardDetails) => {
  return async function (dispatch) {
    const card = await axios.post(
      'http://localhost:5000/cards/normalcard',
      cardDetails
    );
    console.log(card);
    dispatch({
      type: 'NORMAL_CARDS',
      payload: card.data._id,
    });
  };
};
