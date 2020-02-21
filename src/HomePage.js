import React from 'react';
import Shelf from './Shelf' ;
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import ReactDOM from "react-dom";
import SearchPage from "./SearchPage";

class HomePage extends React.Component {
  
  render() {
    
    return (
      <Router>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf name="Current reading" />
              <Shelf name="Want to read" />
              <Shelf name="Read" />
            </div>
          </div>
          <div className="open-search">
           
            <Link to="/search">
              <button onClick ></button>
            </Link>
           
          </div>
        
        </div>
      </Router>
    );
  }
}
export default HomePage;