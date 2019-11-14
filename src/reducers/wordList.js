import { ADD_WORD, UPDATE_WORD, DELETE_WORD } from "../constants/actionTypes";

const initialState = [
  { englishWord: "Hello", germanWord: "Hallo" },
  { englishWord: "Love", germanWord: "Liebe" },
  { englishWord: "Hate", germanWord: "Hass" },
  { englishWord: "Success", germanWord: "Erfolg" },
  { englishWord: "Brother", germanWord: "Bruder" },
  { englishWord: "Victory", germanWord: "Sieg" },
  { englishWord: "Laugh", germanWord: "Lachen" },
  { englishWord: "Income", germanWord: "Einkommen" },
  { englishWord: "Truth", germanWord: "Wahrheit" },
  { englishWord: "act", germanWord: "Akt" },
  { englishWord: "why", germanWord: "warum" },
  { englishWord: "ask", germanWord: "fragen" },
  { englishWord: "men", germanWord: "Männer" },
  { englishWord: "change", germanWord: "Veränderung" },
  { englishWord: "went", germanWord: "ging" },
  { englishWord: "light", germanWord: "Licht" },
  { englishWord: "kind", germanWord: "Art" },
  { englishWord: "off", germanWord: "aus" },
  { englishWord: "need", germanWord: "müssen" },
  { englishWord: "house", germanWord: "Haus" },
  { englishWord: "picture", germanWord: "Bild" },
  { englishWord: "try", germanWord: "versuchen" },
  { englishWord: "us", germanWord: "uns" },
  { englishWord: "again", germanWord: "wieder" },
  { englishWord: "animal", germanWord: "Tier" },
  { englishWord: "point", germanWord: "Punkt" },
  { englishWord: "mother", germanWord: "Mutter" },
  { englishWord: "world", germanWord: "Welt" },
  { englishWord: "build", germanWord: "bauen" },
  { englishWord: "self", germanWord: "selbst" }
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
