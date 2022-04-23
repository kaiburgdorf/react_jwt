import './Dashboard.css';
import {Button} from '@mui/material';
import React from 'react';
import {Logout as LogoutIcon} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import Api from './classes/Api';
import EditNote from './EditNote';
import NoteList from './NoteList';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.logoutHandler = this.logoutHandler.bind(this);
    this.getServerTimeHandler = this.getServerTimeHandler.bind(this);
    this.handleNoteListChange = this.handleNoteListChange.bind(this);
    this.handleNewNoteButton = this.handleNewNoteButton.bind(this);
    this.editNoteChanged = this.editNoteChanged.bind(this);

    this.api = new Api();
    this.api.getAllUsers();
    this.setState({Selection: 0});
    this.setState({reloadList: true});
  }

  logoutHandler() {
    this.api.logout();
  }

  getServerTimeHandler() {
    let data = this.api.getServerTime();
    console.log(data);
    data = this.api.getNoteListData();
    console.log(data);
  }

  handleNoteListChange(id) {
    console.log('handleNoteListChange');
    console.log(id);
    this.state.selection = id;
    this.setState({selection: id});
  }

  handleNewNoteButton() {
    this.setState({selection: 0});
  }

  editNoteChanged() {
    console.log('Dashboard observerd change in edit note');
    this.setState({reloadList: !this.state.reloadList});
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/">
          <Button
            onClick={this.logoutHandler}
            variant="contained"
            endIcon={<LogoutIcon />}
          >
                        Logout
          </Button>
        </Link>
        <Button onClick={this.getServerTimeHandler} variant="contained">
                    gerServerTime
        </Button>
        <Button variant="contained" onClick={this.handleNewNoteButton}>
                    new note
        </Button>
        <div className="notes-view">
          <div className="note-list">
            <NoteList
              api={this.api}
              onChange={this.handleNoteListChange}
              reload={this.state.reloadList}
            ></NoteList>
          </div>
          <div className="edit-note">
            <EditNote
              selection={this.state.selection}
              onChange={this.editNoteChanged}
            ></EditNote>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
