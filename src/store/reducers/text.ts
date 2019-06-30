import { TextActionTypes, ITextState, FormatTypes, Action} from '../../constants/textTypes'

import { createContent, applyFormat, changeWord } from './util'

const initialState: ITextState = {
  text: '',
  content: [],
  indexSelectedWord: null,
  selectedText: '',
}

export const textReducer = (
  state = initialState,
  action: Action
): ITextState => {
  switch (action.type) {
    case TextActionTypes.GET_TEXT:
      return Object.assign({}, state, {
        text: action.payload,
        content: createContent(action.payload, ' '),
      })
    case TextActionTypes.SELECT_WORD:
      return Object.assign({}, state, {
        indexSelectedWord: action.payload.position,
        selectedText: action.payload.selectedText,
      })
    case TextActionTypes.DESELECT_WORD:
      return Object.assign({}, state, {
        indexSelectedWord: null,
        selectedText: '',
      })
    case TextActionTypes.APPLY_BOLD:
      return Object.assign({}, state, {
        content: applyFormat(state.content, state.indexSelectedWord, FormatTypes.BOLD),
      })
    case TextActionTypes.APPLY_ITALIC:
      return Object.assign({}, state, {
        content: applyFormat(state.content, state.indexSelectedWord, FormatTypes.ITALIC),
      })
    case TextActionTypes.APPLY_UNDERLINE:
      return Object.assign({}, state, {
        content: applyFormat(state.content, state.indexSelectedWord, FormatTypes.UNDERLINE),
      })
    case TextActionTypes.CHANGE_WORD:
      return Object.assign({}, state, {
        content: changeWord(state.content, state.indexSelectedWord, action.payload),
      })
    default:
      return state
  }
}