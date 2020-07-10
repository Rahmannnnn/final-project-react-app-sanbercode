import React from 'react';
import {
  BrowserRouter as Router,
  Link} from 'react-router-dom';

function Article(props) {
  return (
    <>
      <Router>
        <div className="Artikel" id="artikel">
          <h1> {props.judul} </h1>
          <p> {props.text} </p>
          <Link to="/more"><button>Read More</button></Link>
        </div>
      </Router>
    </>
  )
}

export default Article;