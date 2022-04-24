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

    this.logoutHandler = this.logoutHandler.bind(this);
    this.handleNoteListChange = this.handleNoteListChange.bind(this);
    this.handleNewNoteButton = this.handleNewNoteButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.editNoteChanged = this.editNoteChanged.bind(this);

    this.api = new Api();
    this.state = {
      'selection': 0,
      'reloadList': this,
    };
  }

  logoutHandler() {
    this.api.logout();
  }

  handleNoteListChange(id) {
    console.log('handleNoteListChange');
    console.log(id);
    this.setState({'selection': id});
  }

  handleNewNoteButton() {
    this.setState({selection: 0});
  }

  handleDeleteButton() {
    console.log('hit delete for selection ' + this.state.selection);
    this.api.deleteNote(this.state.selection)
        .then((response) => {
          console.log(response);
          this.setState({
            'selection': 0,
            'reloadList': !this.state.reloadList,
          });
        })
        .catch((error) => {
          console.log(error);
        });
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
        <Button variant="contained" onClick={this.handleNewNoteButton}>
                    new note
        </Button>
        <Button variant="contained" onClick={this.handleDeleteButton}>
                    delete
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
