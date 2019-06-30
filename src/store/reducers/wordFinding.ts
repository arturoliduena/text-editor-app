import {
  IWordFindingState,
  Action,
  SynonymsActionTypes,
  Isynonyms,
} from '../../constants/synonymsTypes'

const initialState: IWordFindingState = {
  synonyms: [],
  fetching: false,
  error: null,
}

export const wordFindingReducer = (
  state = initialState,
  action: Action
): IWordFindingState => {
  switch (action.type) {
    case SynonymsActionTypes.GET_SYNONYMS_ATTEMPT:
      return Object.assign({}, state, {
        fetching: true,
        synonums: [],
        error: null,
      })
    case SynonymsActionTypes.GET_SYNONYMS_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        synonyms: setSynonyms(action.payload),
        error: null,
      })
    case SynonymsActionTypes.GET_SYNONYMS_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        synonyms: [],
        error: action.payload,
      })
    case SynonymsActionTypes.CLEAN_SYNONYMS:
      return Object.assign({}, state, {
        synonyms: [],
      })
    default:
      return state
  }
}

const setSynonyms = (synonyms: Isynonyms) => {
  return synonyms
}