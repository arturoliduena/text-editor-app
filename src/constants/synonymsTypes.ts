// Define the Synonym type
export interface Isynonym {
  word: string;
  score: number;
  tags?: [string];
}

// Define the Synonyms type
export type Isynonyms = Isynonym[]

// Define the word-finding State
export interface IWordFindingState {
  readonly synonyms: Isynonyms;
  readonly fetching: boolean;
  readonly error: string | null; 
}

// Create Action Constants
export enum SynonymsActionTypes {
  GET_SYNONYMS_ATTEMPT = 'GET_SYNONYMS_ATTEMPT',
  GET_SYNONYMS_SUCCESS = 'GET_SYNONYMS_SUCCESS',
  GET_SYNONYMS_FAILURE = 'GET_SYNONYMS_FAILURE',
  CLEAN_SYNONYMS = 'CLEAN_SYNONYMS',
}

// Interface for get Synonyms attempt Action Type
export interface IGetSynonymsAttempt {
  type: SynonymsActionTypes.GET_SYNONYMS_ATTEMPT;
}

// Interface for get Synonyms success Action Type
export interface IGetSynonymsSuccess {
  type: SynonymsActionTypes.GET_SYNONYMS_SUCCESS;
  payload: Isynonyms;
}

// Interface for get Synonyms failure Action Type
export interface IGetSynonymsFailure {
  type: SynonymsActionTypes.GET_SYNONYMS_FAILURE;
  payload: string;
}

export interface ICleanSynonyms {
  type: SynonymsActionTypes.CLEAN_SYNONYMS;
}

/* 
Combine the action types with a union
*/
export type Action = IGetSynonymsAttempt | IGetSynonymsSuccess | IGetSynonymsFailure | ICleanSynonyms;