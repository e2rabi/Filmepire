import React from 'react';
import { CssBaseline } from '@mui/material'
import { Switch, Route } from 'react-router-dom'
import { Actors, Movies, MovieInformation, Profile, NavBar } from './'
import useStyles from './styles'
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route excat path="/movies">
            <Movies />
          </Route>
          <Route excat path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route excat path="/actor/:id">
            <Actors />
          </Route>
          <Route excat path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
