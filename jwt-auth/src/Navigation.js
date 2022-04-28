import './Navigation.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  Button,
  Tooltip,
  MenuItem,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AuthService from './classes/AuthService';


class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.handleOpenNavMenu = this.handleOpenNavMenu.bind(this);
    this.handleOpenUserMenu = this.handleOpenUserMenu.bind(this);
    this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this);
    this.handleCloseUserMenu = this.handleCloseUserMenu.bind(this);

    const userFound = ((new AuthService).validateJwt());

    const pages = (userFound) ?
                    ['Welcome', 'Dashboard']:
                    ['Welcome', 'Login', 'Register'];

    this.state = {
      'anchorElNav': null,
      'anchorElUser': null,
      'pages': pages,
      'settings': ['Profile', 'Logout'],
      'userFound': userFound,
    };
  }


  handleOpenNavMenu(event) {
    this.setState({'anchorElNav': event.currentTarget});
  }

  handleOpenUserMenu(event) {
    this.setState({'anchorElUser': event.currentTarget});
  }

  handleCloseNavMenu(event) {
    this.setState({'anchorElNav': null});
  }

  handleCloseUserMenu() {
    this.setState({'anchorElUser': null});
  }

  render() {
    return (
      <div>


        <AppBar position="static">

          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
              >
            JWT App
              </Typography>

              <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(this.state.anchorElNav)}
                  onClose={this.handleCloseNavMenu}
                  sx={{
                    display: {xs: 'block', md: 'none'},
                  }}
                >
                  {this.state.pages.map((page) => (
                    <Link to={page} key={page}
                      onClick={this.handleCloseNavMenu}>
                      <MenuItem key={page} onClick={this.handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
              >
            JWT App
              </Typography>
              <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {this.state.pages.map((page) => (
                  <Link to={page} key={page}>
                    <Button
                      key={page}
                      onClick={this.handleCloseNavMenu}
                      sx={{my: 2, color: 'white', display: 'block'}}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
              </Box>

              {this.state.userFound &&
              <Box sx={{flexGrow: 0}}>
                <Tooltip title="Open settings">
                  <IconButton onClick={this.handleOpenUserMenu} sx={{p: 0}}>
                    <Avatar alt="Remy Sharp" src="" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{mt: '45px'}}
                  id="menu-appbar"
                  anchorEl={this.state.anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(this.state.anchorElUser)}
                  onClose={this.handleCloseUserMenu}
                >
                  {this.state.settings.map((setting) => (
                    <Link to={setting} key={setting}>
                      <MenuItem
                        key={setting}
                        onClick={this.handleCloseUserMenu}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
              }
            </Toolbar>
          </Container>
        </AppBar>


      </div>
    );
  }
}

export default Navigation;
