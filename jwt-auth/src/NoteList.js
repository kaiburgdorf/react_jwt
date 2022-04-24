import React, {useEffect, useState} from 'react';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';

function NoteList(props) {
  const [myData, setMyData] = useState([]);

  const api = props.api;

  useEffect(() => {
    console.log('notelist needs reload');

    console.log(props.reload);

    if (myData.length < 1) {
      setMyData(['loading...']);
    }

    api.getNoteListData()
        .then((result) => {
          console.log(result);
          setMyData(result);
        })
        .catch((error) => {
          console.log(error);
          setMyData(['something went wrong']);
        });
  }, [props.reload]);

  useEffect(() => {
    if (myData.length < 1) {
      setMyData(['loading...']);
    }

    api.getNoteListData()
        .then((result) => {
          console.log(result);
          setMyData(result);
        })
        .catch((error) => {
          console.log(error);
          setMyData(['something went wrong']);
        });
  }, []);

  const createEntryItem = (value) => {
    return (
      <div id={value.id}>
        <b>{value.title}</b><br />
        <u>{value.last_change}</u><br />
        <i>{value.teaser}</i>
      </div>
    );
  };

  const handleListAction = (event) => {
    console.log(event.target.id);
    const entryId = event.target.id;
    props.onChange(entryId);
  };

  return (
    <div>
      <h1>NoteList</h1>

      <List>
        {
        myData ?
          myData.map((value, index) => {
            return (
              <ListItem disablePadding key={index} onClick={handleListAction}>
                <ListItemButton>
                  <ListItemText primary={createEntryItem(value)} />
                </ListItemButton>
              </ListItem>
            );
          }):
          <div><p>loading...</p></div>
        }
      </List>
    </div>
  );
}

export default NoteList;
