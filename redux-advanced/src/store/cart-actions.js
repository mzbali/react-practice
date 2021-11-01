import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

// Action creators thunk

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchCart = async () => {
      const request = await fetch(
        'https://react-http-d90c3-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
      );

      if (!request.ok) {
        throw new Error(`Couldn't fetch cart.`);
      }
      const data = await request.json();
      console.log(data);
      dispatch(cartActions.replaceCart({ cart: data }));
    };
    try {
      await fetchCart();
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          title: 'Error',
          status: 'error',
          message: err.message,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return (dispatch) => {
    const sendRequest = async () => {
      dispatch(
        uiActions.setNotification({
          title: 'Requesting',
          status: 'Requesting',
          message: 'Sending cart...',
        })
      );
      const request = await fetch(
        'https://react-http-d90c3-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(request.ok);
      if (!request.ok) {
        throw new Error('Something went Wrong');
      }
      dispatch(
        uiActions.setNotification({
          title: 'Success',
          status: 'success',
          message: 'Sent Cart Succesfully',
        })
      );
    };

    sendRequest().catch((err) => {
      dispatch(
        uiActions.setNotification({
          title: 'Error',
          status: 'error',
          message: err.message,
        })
      );
    });
  };
};
