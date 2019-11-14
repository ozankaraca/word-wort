import {
  ADD_WORD,
  UPDATE_WORD,
  DELETE_WORD,
  CHANGE_APP_MODE
} from "../constants/actionTypes";

export const addWord = (englishWord, germanWord) => ({
  type: ADD_WORD,
  payload: {
    englishWord,
    germanWord
  }
});

export const updateWord = (englishWord, germanWord, index) => ({
  type: UPDATE_WORD,
  payload: {
    englishWord,
    germanWord
  },
  index: index
});

export const deleteWord = englishWord => ({
  type: DELETE_WORD,
  payload: englishWord
});

export const changeAppMode = newAppType => ({
  type: CHANGE_APP_MODE,
  payload: newAppType
});
