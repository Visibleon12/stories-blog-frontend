import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlesListPage from './pages/ArticlesListPage'
import ArticlePage from './pages/ArticlePage'
import Navbar from './Navbar'
import NotFoundPage from './pages/NotFoundPage'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/article-list" component={ArticlesListPage}/>
            <Route path="/article/:name" component={ArticlePage}/>
            <Route  component={NotFoundPage}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;