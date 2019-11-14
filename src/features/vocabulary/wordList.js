import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Icon,
  IconButton,
  TextField,
  ListSubheader
} from "@material-ui/core";

import { deleteWord } from "../../actions/index";

const WordList = () => {
  const wordList = useSelector(state => state.WordList);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  return (
    <List
      subheader={
        <ListSubheader component="div">
          <ListItemSecondaryAction>
            <TextField
              value={searchText}
              onChange={event => setSearchText(event.target.value)}
              color="secondary"
              label="Search"
            ></TextField>
          </ListItemSecondaryAction>
          Words
        </ListSubheader>
      }
    >
      {wordList
        .filter(
          x =>
            x.englishWord.toLowerCase().includes(searchText.toLowerCase()) ||
            x.germanWord.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((word, key) => {
          return (
            <ListItem key={key} divider>
              <ListItemText
                primary={word.englishWord}
                secondary={word.germanWord}
              ></ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => dispatch(deleteWord(word.englishWord))}
                >
                  <Icon>delete</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      {wordList.filter(
        x =>
          x.englishWord.toLowerCase().includes(searchText.toLowerCase()) ||
          x.germanWord.toLowerCase().includes(searchText.toLowerCase())
      ).length === 0 && (
        <ListItem>
          <ListItemText secondary="No Record Found"></ListItemText>
        </ListItem>
      )}
    </List>
  );
};

export default WordList;
