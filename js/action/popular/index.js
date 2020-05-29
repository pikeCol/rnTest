import Types from '../types';
import DataStore, {FLAG_STORAGE} from '../../expand/dao/DataStore';

export function onLoadMorePopular (storeName, url) {
  return dispatch => {
    dispatch ({type: Types.POPULAR_REFRESH, storeName: storeName}); //开始loading
    let dataStore = new DataStore ();
    dataStore
      .fetchData (url)
      .then (data => {
        handleData (dispatch, storeName, data);
      })
      .catch (err => {
        console.log (err);
        dispatch ({type: Types.LOAD_POPULAR_REFRESH_FAIL, storeName});
      });
  };
}

function handleData (dispatch, storeName, data) {
  dispatch ({
    type: Types.LOAD_POPULAR_REFRESH_SUCCESS,
    items: data && data.data && data.data.items,
    storeName,
  });
}
