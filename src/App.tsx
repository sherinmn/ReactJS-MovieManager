import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import MovieList from './components/MovieList';
import ReactDom from 'react-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path="/" element={<NavigationBar/>}></Route>
        <Routes>
          <Route path=":section"   element={<MovieList />}></Route>
          <Route path="/" render={
            () => {
              return (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                  Movies on the Tip is an aggregator of movies. 
                  Get details of all your favourite movies right here!
                </div>
              )
            }
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;