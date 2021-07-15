import axios from 'axios';
export const FlexiApiDelete = (id, cardtype) => {
  return async function (dispatch) {
    const card = await axios.delete(
      `http://localhost:5000/cards/${cardtype.toLowerCase()}delete?id=${id}`
    );
    console.log(id);
    console.log(card);
    dispatch({
      type: 'FLIPABLE_CARDS_DELETE',
      payload: card.data,
    });
  };
};
