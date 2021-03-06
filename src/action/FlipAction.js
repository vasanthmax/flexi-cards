import axios from 'axios';
import { message } from 'antd';

export const FlexiApi = (cardDetails) => {
  return async function (dispatch) {
    const card = await axios.post(
      'http://localhost:5000/cards/flipcard',
      cardDetails
    );
    if (card.status === 201) {
      message.success('Your Card has been saved Successfully');
    }
    dispatch({
      type: 'FLIPABLE_CARDS',
      payload: card.data._id,
    });
  };
};
