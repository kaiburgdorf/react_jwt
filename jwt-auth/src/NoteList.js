import React, {useEffect, useState} from 'react';
import {IconButton, List, ListItem,
  ListItemButton,
  ListItemSecondaryAction, ListItemText} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function NoteList(props) {
  const [myData, setMyData] = useState([]);
  const [needReload, setNeedReload] = useState(false);

  const api = props.api;

  useEffect(() => {
    console.log('notelist needs reload');

    console.log(props.reload);

    if (myData.length < 1) {
      setMyData(['loading...']);
    }

    api.doRequest('getNoteListData')
        .then((result) => {
          console.log(result);
          setMyData(result);
        })
        .catch((error) => {
          console.log(error);
          setMyData(['something went wrong']);
        });
  }, [props.reload, needReload]);

  useEffect(() => {
    if (myData.length < 1) {
      setMyData(['loading...']);
    }

    api.doRequest('getNoteListData')
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

  const handleListAction = (id) => {
    if (!id) return;
    console.log('handleListAction - id: ' + id);

    props.onChange(id);
  };

  const handleDelete = (id, index) => {
    api.doRequest('deleteNote', JSON.stringify(id));
    setNeedReload(!needReload);
    props.onChange(-1);
    console.log('should delete id: ' + id + ' now');
  };

  return (
    <div>
      <h1>NoteList</h1>

      <List>
        {
        myData ?
          myData.map((value, index) => {
            return (
              <ListItem disablePadding key={index}
                onClick={() => handleListAction(value.id)}
              >
                <ListItemButton>
                  <ListItemText
                    primary={createEntryItem(value)}
                    id={value.id}>
                  </ListItemText>
                </ListItemButton>
                <ListItemSecondaryAction
                  onClick={() => handleDelete(value.id)}>
                  <IconButton>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          }):
          <p>loading...</p>
        }
      </List>
    </div>
  );
}

export default NoteList;
