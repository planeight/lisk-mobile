import actionTypes from '../constants/actions';
import txConstants from '../constants/transactions';
import { getTransactions, send } from '../utilities/api/transactions';
import { loadingStarted, loadingFinished } from './loading';

export const transactionsLoaded = data =>
  (dispatch, getState) => {
    const { activePeer } = getState().peers;
    dispatch(loadingStarted(actionTypes.transactionsLoaded));
    getTransactions(activePeer, data)
      .then((response) => {
        dispatch({
          type: actionTypes.transactionsLoaded,
          data: {
            transactions: response.data,
          },
        });
        dispatch(loadingFinished(actionTypes.transactionsLoaded));
      });
  };

export const transactionAdded = (data, success, error) =>
  (dispatch, getState) => {
    const { activePeer } = getState().peers;
    const account = getState().accounts.active;
    send(activePeer, data)
      .then(({ id }) => {
        dispatch({
          data: {
            id,
            senderPublicKey: account.publicKey,
            senderId: account.address,
            recipientId: data.recipientId,
            amount: data.amount,
            asset: {
              data: data.data,
            },
            fee: txConstants.send.fee,
            type: txConstants.send.type,
          },
          type: actionTypes.pendingTransactionAdded,
        });
        success({ txId: id });
      }).catch((err) => {
        error(err);
      });
  };
