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
                <TextField multiline
                    value={ content }
                    onChange={event => { setContent(event.target.value) }}
                    name="content"></TextField>
                <br />
                <input type="submit" value="save" />
            </form>
            
        </div>
    );
}

export default EditNote;