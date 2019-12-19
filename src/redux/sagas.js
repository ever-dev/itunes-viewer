import { put, takeLatest, all } from 'redux-saga/effects';
import { ITUNE_API_URL } from '../constants';

export function* fetchEntities(params) {
  const json = yield fetch(
    `${ITUNE_API_URL}/search?term=${params.key}&country=US&media=${params.mediaType}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .catch(err => ({ error: 'error', err }));
  if (!json.error) {
    yield put({type: 'RECEIVE_ENTITIES', entities: json});
  } else {
    console.error('An error occurred in fetching entities from iTunes');
  }
}

export function* getEntitiesActionWatcher() {
  yield takeLatest('GET_ENTITY', fetchEntities);
}

export function* rootSaga() {
  yield all([getEntitiesActionWatcher()]);
}
