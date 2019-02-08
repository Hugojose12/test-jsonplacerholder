import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import PostDetail from '../pages/PostDetail';
import Profile from '../pages/Profile';
import Todos from '../pages/Todos';
import Error404 from '../pages/Error404';
import Gallery from '../pages/Gallery';
import GalleryDetail from '../pages/GalleryDetail';

const Menu = () => (
  <Router>
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/gallery">Gallery</Link>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/todos" component={Todos} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/user/:id" component={Profile} />
        <Route exact path="/album/:id/photos" component={GalleryDetail} />
        <Route component={Error404} />
      </Switch>
    </nav>
  </Router>
)

export default Menu;