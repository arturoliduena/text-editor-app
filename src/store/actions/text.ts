import getMockText from '../../util/text.service';
import { TextActionTypes, IGetTextAction, ISelectWord, IDeselectWord, IApplyBold, IApplyItalic, IApplyUnderline, IChangeWord } from '../../constants/textTypes';

import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';

// TypeScript infers that this function is returning getText
export const setText = (text: string): IGetTextAction => {
  return {
    type: TextActionTypes.GET_TEXT,
    payload: text,
  }
}

export const selectWord = (position: number, selectedText: string): ISelectWord => {
  return {
    type: TextActionTypes.SELECT_WORD,
    payload: { position, selectedText },
  }
}

export const deselectWord = (): IDeselectWord => {
  return {
    type: TextActionTypes.DESELECT_WORD,
  }
}

export const applyBold = (): IApplyBold => {
  return {
    type: TextActionTypes.APPLY_BOLD,
  }
}

export const applyItalic = (): IApplyItalic => {
  return {
    type: TextActionTypes.APPLY_ITALIC,
  }
}

export const applyUnderline = (): IApplyUnderline => {
  return {
    type: TextActionTypes.APPLY_UNDERLINE,
  }
}

export const changeWord = (newWord: string): IChangeWord => {
  return {
    type: TextActionTypes.CHANGE_WORD,
    payload: newWord
  }
}

export const getText: ActionCreator<
  ThunkAction<Promise<any>, AppState, null, Action<string>>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const text = await getMockText();
      dispatch(
        setText(text)
      );
    } catch (err) {
      console.error(err);
    }
  };
};
