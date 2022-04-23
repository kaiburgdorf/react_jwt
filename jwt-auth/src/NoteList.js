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

    const createEntryItem = (value) => {
        return (
            <div>
            <b>{value.title}</b><br />
            <u>{value.last_change}</u><br />
            <i>{value.teaser}</i>
            </div>
        );
    }

    return (
        <div>
            <h1>NoteList</h1>

            <List>
                {myData ? myData.map((value, index) => {
                    return (
                        <ListItem disablePadding key={index}>
                            <ListItemButton>
                            <ListItemText primary={createEntryItem(value)} />
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