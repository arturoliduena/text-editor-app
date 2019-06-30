export enum FormatTypes {
  BOLD,
  ITALIC,
  UNDERLINE,
}

export type content = {
  text: string,
  isBold?: boolean,
  isItalic?: boolean,
  isUnderline?: boolean,
}

// Define the Text State
export interface ITextState {
  readonly text: string;
  readonly content: content[],
  readonly indexSelectedWord: number | null,
  readonly selectedText: string,
}

// Create Action Constants
export enum TextActionTypes {
  GET_TEXT = 'GET_TEXT',
  SELECT_WORD = 'SELECT_WORD',
  DESELECT_WORD = 'DESELECT_WORD',
  APPLY_BOLD = 'APPLY_BOLD',
  APPLY_ITALIC = 'APPLY_ITALIC',
  APPLY_UNDERLINE = 'APPLY_UNDERLINE',
  CHANGE_WORD = 'CHANGE_WORD'
}

// Interface for Get Text Action Type
export interface IGetTextAction {
  type: TextActionTypes.GET_TEXT;
  payload: string;
}

export interface ISelectWord {
  type: TextActionTypes.SELECT_WORD,
  payload: { position: number, selectedText: string }
}

export interface IDeselectWord {
  type: TextActionTypes.DESELECT_WORD,
}

export interface IApplyBold {
  type: TextActionTypes.APPLY_BOLD,
}

export interface IApplyItalic {
  type: TextActionTypes.APPLY_ITALIC,
}

export interface IApplyUnderline {
  type: TextActionTypes.APPLY_UNDERLINE,
}

export interface IChangeWord {
  type: TextActionTypes.CHANGE_WORD,
  payload: string,
}

/* 
Combine the action types with a union
*/
export type Action = IGetTextAction | ISelectWord | IDeselectWord | IApplyBold | IApplyItalic | IApplyUnderline | IChangeWord;