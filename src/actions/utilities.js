import fetch from 'isomorphic-fetch';
import $ from 'jquery';

import { requestPayloads, requestStatuses } from './types';
import { requestTypes } from '../../constants';
import auth from '../auth';

const { SUCCESS, PENDING, SUBMITTED, IDLE, ERROR } = requestStatuses;
const {
  successPayload,
  pendingPayload,
  errorPayload,
  idlePayload,
  submittedPayload
} = requestPayloads;

export function authenticate(action, dispatch, callback) {
  const userId = auth.userId();
  if (!userId) {
    dispatch(Object.assign(action, errorPayload('User is not logged in.')));
  } else {
    callback(userId);
  }
}