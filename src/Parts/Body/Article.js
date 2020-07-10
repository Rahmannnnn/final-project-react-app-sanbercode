import React from 'react';

function Article(props) {
  return (
    <>
      <div className="Artikel" id="artikel">
        <h1> {props.judul} </h1>
        <p> {props.text} </p>
        <button> Read More </button>
      </div>
      <br/>
    </>
  )
}

export default Article;