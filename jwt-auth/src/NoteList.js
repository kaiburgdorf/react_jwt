import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Api from './classes/Api';
import { HourglassEmpty } from '@mui/icons-material';

function NoteList(props) {

    //const api = new Api();

    const [myData, setMyData] = useState([]);
    const [trial, setTrial] = useState(0);
    const api = props.api;

    const GetData = async () => {
            console.log("async GetData call");
            console.log(api);
            if(myData.length < 1) {
                api.getServerTime()
                .then((value) => {
                    console.log("in then with value: " + value);
                    setMyData(value);
                })
                .catch((error) => {
                    console.log("shit");
                    return error;
                })
                .then(() => {
                    setTrial(trial+1);
                    if(trial > 5) {
                        setMyData(["nothing found ;("]);
                    }
                    console.log("trial " + trial);
                });
            }
            //console.log(res);
    }

    useEffect(() => {
        GetData();
    }, [myData]);

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