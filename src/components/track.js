import React from 'react'

const Track = ({ artist, title, preview, cover, link }) =>
  <div className="card" style={{ marginTop: "1em" }}>
    <div className="card-header">
      <div className="card-header-title columns is-mobile">
        <div className="column">Title: { title }</div>
        <a href={link}>
          <i className="fas fa-external-link-alt column is-narrow"></i>
        </a>
      </div>
    </div>
    <div className="card-content align-center">
      <div className="columns is-mobile is-multiline">
        <div className="card-image column is-narrow">
          <img src={ cover } alt=""/>
        </div>
        <div className="column is-one-third-tablet">
          <p>Artist: { artist }</p>
        </div>
        <div className="column is-full-mobile">
          <audio controls style={{ "width": "100%", "height": "50px" }}>
            <source src={ preview }/>
          </audio>        
        </div>
      </div>
    </div>
  </div>


export default Track
