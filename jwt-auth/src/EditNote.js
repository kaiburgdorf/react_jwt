import { TextField, Button } from '@mui/material';
import React from 'react';


function EditNote(props) {

    return (
        <div>
            <h1>EditNoteComponent</h1>
            <form>
                <TextField
                    required
                    label="Titel"></TextField>
                <br />
                <TextField multiline></TextField>
                <br />
                <Button>speichern</Button>
            </form>
            
        </div>
    );
}

export default EditNote;