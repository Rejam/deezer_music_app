import React from 'react'

const Track = ({ artist, title, preview, cover }) =>
  <div className="card" style={{ marginTop: "1em" }}>
    <div className="card-header">
      <div className="card-header-title">Title: { title }</div>
    </div>
    <div className="card-content">
      <div className="columns">
        <div className="card-image column is-narrow">
          <img src={ cover } alt=""/>
        </div>
        <div className="column">
          <p>Artist: { artist }</p>
        </div>
        <div className="column">
          <audio controls>
            <source src={ preview }/>
          </audio>        
        </div>
      </div>
    </div>
  </div>


export default Track