import './EditNote.css';
import {TextField, Button} from '@mui/material';
import React, {useEffect, useState} from 'react';
import Api from './classes/Api';


function EditNote(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log('title: ' + title + ', content: ' + content);
    const api = new Api();
    if (props.selection > 0) {
      api.updateNote(JSON.stringify({
        'title': title,
        'content': content,
        'id': props.selection,
      }));
    } else {
      api.newNote(JSON.stringify({'title': title, 'content': content}));
    }
    props.onChange();
  };


  useEffect(() => {
    console.log('yep updated editNote');

    if (props.selection > 0) {
      const api = new Api();
      api.getEntry(props.selection)
          .then((result) => {
            setTitle(result.title);
            setContent(result.content);
          })
          .catch((error) => {
            console.log(error);
            // setTitle(["something went wrong"]);
          });
    } else {
      setTitle('');
      setContent('');
    }
  }, [props.selection]);

  return (
    <div>
      <h1>EditNoteComponent</h1>

      <form onSubmit={handleSubmit}>
        <TextField
          required
          label="Titel"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          name="title"></TextField>
        <br />
        <TextField id="content-textfield"
          multiline
          maxRows='15'
          value={ content }
          onChange={(event) => {
            setContent(event.target.value);
          }}
          name="content"></TextField>
        <br />
        <Button variant="contained" type="submit">save</Button>
      </form>

    </div>
  );
}

export default EditNote;
