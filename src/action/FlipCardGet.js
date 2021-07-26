import axios from 'axios';
export const FlexiApiGet = (id) => {
  return async function (dispatch) {
    const card = await axios.get(`http://localhost:5000/cards/flip?id=${id}`);
    console.log(card);
    dispatch({
      type: 'FLIPABLE_CARDS_GET',
      payload: card.data,
    });
  };
};
