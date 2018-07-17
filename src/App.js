import React, { Component } from 'react';
import './App.css';
import theme from './theme';
import SkillsList from './SkillsList';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

const styles = {
  inherit: {
    color: 'inherit',
    textDecoration: 'inherit'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

export class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <a href=".." className={classes.inherit}>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Up Button"
                >
                  <ArrowBack />
                </IconButton>
              </a>
              <Typography variant="title" color="inherit">
                Anthony's Web Skills
              </Typography>
            </Toolbar>
          </AppBar>
          <SkillsList />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
