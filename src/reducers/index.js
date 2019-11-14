import { combineReducers } from "redux";
import WordList from './wordList'
import AppMode from './appMode'

export default combineReducers({ WordList, AppMode });