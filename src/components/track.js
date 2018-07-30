import React from 'react'

const Track = ({ artist, title, preview, cover, link }) =>
  <div className="card" style={{ marginTop: "1em" }}>
    <div className="card-header">
      <div className="card-header-title columns is-mobile">
        <div className="column">Title: { title }</div>
        <a href={link}>
          <i class="fas fa-external-link-alt column is-narrow"></i>
        </a>
      </div>
    </div>
    <div className="card-content align-center">
      <div className="columns">
        <div className="card-image column is-narrow">
          <img src={ cover } alt=""/>
        </div>
        <div className="column">
          <p>Artist: { artist }</p>
        </div>
        <div className="column">
          <audio controls style={{ "width": "100%"}}>
            <source src={ preview }/>
          </audio>        
        </div>
      </div>
    </div>
  </div>


export default Track