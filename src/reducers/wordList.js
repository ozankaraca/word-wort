import { ADD_WORD, UPDATE_WORD, DELETE_WORD } from "../constants/actionTypes";

const initialState = [
];

const WordList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORD:
      if (
        !state.find(
          x =>
            x.englishWord.toLowerCase() ===
            action.payload.englishWord.toLowerCase()
        )
      ) {
        return [...state, action.payload].sort(function(a, b) {
          var textA = a.englishWord.toUpperCase();
          var textB = b.englishWord.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
      } else {
        return state;
      }
    case UPDATE_WORD:
      return state.map((item, index) => {
        debugger;
        if (index !== action.index) {
          return item;
        }
        return {
          ...item,
          ...action.payload
        };
      });
    case DELETE_WORD:
      const newState = state.filter(val => val.englishWord !== action.payload);
      return newState;
    default:
      return state.sort(function(a, b) {
        var textA = a.englishWord.toUpperCase();
        var textB = b.englishWord.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
  }
};

export default WordList;
