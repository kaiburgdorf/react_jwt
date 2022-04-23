import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Api from './classes/Api';
import { HourglassEmpty } from '@mui/icons-material';

function NoteList(props) {

    const [myData, setMyData] = useState([]);
    const api = props.api;

    useEffect(() => {
        if(myData.length < 1) {
            setMyData(["loading..."]);
        }

        let request = api.getNoteListData()
                    .then(result => {
                        console.log(result);
                        setMyData(result);
                    })
                    .catch(error => {
                        console.log(error);
                        setMyData(["something went wrong"]);
                    });
    }, []);

    return (
        <div>
            <h1>NoteList</h1>

            <List>
                {myData ? myData.map((value, index) => {
                    return (
                        <ListItem disablePadding key={index}>
                            <ListItemButton>
                            <ListItemText primary={value} />
                            </ListItemButton>
                        </ListItem>
                    )
                    })
                :
                        <div><p>loading...</p></div>
                }
            </List>
        </div>
    );
}

export default NoteList;