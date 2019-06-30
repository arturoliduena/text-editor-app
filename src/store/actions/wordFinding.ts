import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';

import { SynonymsActionTypes, IGetSynonymsAttempt, IGetSynonymsSuccess, IGetSynonymsFailure, ICleanSynonyms } from '../../constants/synonymsTypes';

// TypeScript infers that this function is returning synonyms
export const getSynonymsAttempt = (): IGetSynonymsAttempt => {
  return {
    type: SynonymsActionTypes.GET_SYNONYMS_ATTEMPT,
  }
}

export const getSynonymsSuccess = (synonyms: any): IGetSynonymsSuccess => {
  return {
    type: SynonymsActionTypes.GET_SYNONYMS_SUCCESS,
    payload: synonyms
  }
}

export const getSynonymsFailure = (error: string): IGetSynonymsFailure => {
  return {
    type: SynonymsActionTypes.GET_SYNONYMS_FAILURE,
    payload: error
  }
}

export const cleanSynonyms = (): ICleanSynonyms => {
  return {
    type: SynonymsActionTypes.CLEAN_SYNONYMS,
  }
}

export const searchSynonymsRequest: ActionCreator<
  ThunkAction<Promise<any>, AppState, null, Action<string>>
> = (text: string) => {
  return async (dispatch: Dispatch) => {
    getSynonymsAttempt();
    try {
      const response = await fetch(`https://api.datamuse.com/words?ml=${text}&max=4`);
      const synonyms = await response.json()
      dispatch(
        getSynonymsSuccess(synonyms)
      );
    } catch (err) {
      getSynonymsFailure(err);
    }
  };
};
