import axios from 'axios';

export const NormalCardAll = () => {
  return async function (dispatch) {
    const card = await axios.get(`http://localhost:5000/cards/normalcardall`);
    console.log(card);
    dispatch({
      type: 'NORMAL_CARDS_ALL',
      payload: card.data,
    });
  };
};
