import React from 'react';
import { CssBaseline } from '@mui/material'
import { Switch, Route } from 'react-router-dom'
import { Actors, Movies, MovieInformation, Profile, NavBar } from './'
function App() {
  return (
    <div>
      <CssBaseline />
      <main>
        <NavBar />
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
