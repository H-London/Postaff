import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
  SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText,
  Divider, AppBar, Toolbar, Typography, Button, IconButton,
} from '@material-ui/core';
import {
  Home, Dashboard, Schedule, People, LocationCity, Work, Create,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Login from '../Home/Login.jsx';


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '2vh',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: '1vw',
  },
  list: {
    minWidth: 150,
    maxWidth: 250,
  },
  fullList: {
    width: 'auto',
  },
  sideBar: {
    minWidth: 230,
    maxWidth: '30vw',
    backgroundColor: theme.palette.background.paper,
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleToggle(open) {
    this.setState({
      isOpen: open,
    });
  }

  renderAdminSideBar() {
    const { classes } = this.props;
    return (
      <div className={classes.sideBar}>
        <List component="nav">
          <Link to={'/'}>
            <ListItem button>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItem>
          </Link>
          {this.props.isLoggedIn && this.props.option === 'admin'
            ? <List>
              <Link to={'/admin'}>
                <ListItem button>
                  <ListItemIcon>
                    <Dashboard/>
                  </ListItemIcon>
                  <ListItemText primary="Dashboard"/>
                </ListItem>
              </Link>
              <Link to={'/admin/schedule'}>
                <ListItem button>
                  <ListItemIcon>
                    <Schedule/>
                  </ListItemIcon>
                  <ListItemText primary="Schedule"/>
                </ListItem>
              </Link>
              <Link to={'/admin/subs'}>
                <ListItem button>
                  <ListItemIcon>
                    <People/>
                  </ListItemIcon>
                  <ListItemText primary="Substitutes"/>
                </ListItem>
              </Link>
              <Link to={'/admin/schools'}>
                <ListItem button>
                  <ListItemIcon>
                    <LocationCity/>
                  </ListItemIcon>
                  <ListItemText primary="Schools"/>
                </ListItem>
              </Link>
              <Link to={'/admin/jobs'}>
                <ListItem button>
                  <ListItemIcon>
                    <Work/>
                  </ListItemIcon>
                  <ListItemText primary="Jobs"/>
                </ListItem>
              </Link>
            </List>
            : <div></div>}
          {this.props.isLoggedIn && this.props.option === 'school'
            ? <List>
              <Link to={'/school'}>
                <ListItem button>
                  <ListItemIcon>
                    <Dashboard/>
                  </ListItemIcon>
                  <ListItemText primary="Dashboard"/>
                </ListItem>
              </Link>
              <Link to={'/jobs/create'}>
                <ListItem button>
                  <ListItemIcon>
                    <Create/>
                  </ListItemIcon>
                  <ListItemText primary="Request Job"/>
                </ListItem>
              </Link>
            </List>
            : <div></div>}
          <Divider/>
        </List>
      </div>
    );
  }

  render() {
    console.log('this navbar.jsx');
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar color="default" position="static">
          <Toolbar>
            <Tooltip id="tooltip-icon" title="More Options">
              <IconButton onClick={() => this.handleToggle(true)} className={classes.menuButton} color="inherit">
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <SwipeableDrawer
              open={this.state.isOpen}
              onClose={() => this.handleToggle(false)}
              onOpen={() => this.handleToggle(true)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={() => this.handleToggle(false)}
                onKeyDown={() => this.handleToggle(false)}
              >
                {this.renderAdminSideBar()}
                <List component="nav">
                  <ListItem button>
                    <ListItemText primary="About"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Contact"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Careers"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Terms"/>
                  </ListItem>
                </List>
              </div>
            </SwipeableDrawer>
            <Typography variant="title" style={{ color: '#4C23C3' }} className={classes.flex}>
              <i><b>Postaff</b></i>
            </Typography>

            {!this.props.isLoggedIn
              ? <Login clickLogout={this.props.clickLogout} onLogin={this.props.onLogin}/>
              : <div>
                <Grid container spacing={8} alignItems="center">
                  <Grid item xs={6}>
                    <span><Typography variant="subheading">{`Hi ${this.props.username}`}</Typography></span>
                  </Grid>
                  <Grid item xs={2}>
                    <Link to={{ pathname: '/', state: { clicked: false } }}>
                      <Button color="inherit" onClick={() => this.props.clickLogout()}>
                        <Typography variant="title">Logout</Typography>
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </div>
            }

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
