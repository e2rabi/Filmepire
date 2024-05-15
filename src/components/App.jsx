import React from 'react';
import { CssBaseline } from '@mui/material'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <CssBaseline />
      <main>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route excat path="/movies">
            <h1>Movies</h1>
          </Route>
          <Route excat path="/movie/:id">
            <h1>Movies informations</h1>
          </Route>
          <Route excat path="/actor/:id">
            <h1>Actors informations</h1>
          </Route>
          <Route excat path="/profile/:id">
            <h1>Profile informations</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
