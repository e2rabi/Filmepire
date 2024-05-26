import React from 'react';
import { CssBaseline } from '@mui/material'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
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
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actor/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
