import './EditNote.css';
import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import Api from './classes/Api';


function EditNote(props) {

    const [title, setTitle] = useState(""); //hier props.title
    const [content, setContent] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        console.log("title: " + title + ", content: " + content);
        let api = new Api();
        api.newNote(JSON.stringify({"title": title, "content": content}));
    }

    return (
        <div>
            <h1>EditNoteComponent</h1>
            
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    label="Titel"
                    value={title}
                    onChange={event => { setTitle(event.target.value) }}
                    name="title"></TextField>
                <br />
                <TextField id="content-textfield"
                    multiline
                    maxRows='15'
                    value={ content }
                    onChange={event => { setContent(event.target.value) }}
                    name="content"></TextField>
                <br />
                <Button variant="contained" type="submit">save</Button>
            </form>
            
        </div>
    );
}

export default EditNote;