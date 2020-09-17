import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import logo from './logo.svg';
import './App.scss';
import Home from './home/components/home/Home';
import Playlist from './playlist/components/playlist/Playlist';


export default function App() {
  return (
    <Router>
      <div className="app-root">
        <Header />
        <Container className="app-content">
          <Switch>
            <Route exact path="/"
                   component={ Home }
            />
            <Route path="/playlists/:id"
                   component={ Playlist }
            />
            <Route path="*">
              <div>404</div>
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className="app-header">
      <div className="app-logo-container">
        <img src={ logo }
             className="app-logo"
             alt="logo"
        />
      </div>
    </header>
  );
}
