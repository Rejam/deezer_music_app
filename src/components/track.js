import React from 'react'

const Track = ({ artist, title, preview, cover, link, fave, saved }) => (
  <div className="card" style={{ marginTop: "1em" }}>
    <div className="card-header">
      <div className="card-header-title columns is-mobile">
        <div className="column">{ title }</div>
        <div className="column is-narrow">
          <button onClick={fave} className="button">
            <i className={`${saved ? 'fas' : 'far'} fa-heart`} ></i>
          </button>
          <a href={link} className="button" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="card-content align-center">
      <div className="columns is-mobile is-multiline">
        <div className="card-image column is-narrow">
          <img src={ cover } alt=""/>
        </div>
        <div className="column is-one-third-tablet">
          <p>{ artist }</p>
        </div>
        <div className="column is-full-mobile">
          <audio controls style={{ "width": "100%", "height": "50px" }}>
            <source src={ preview }/>
          </audio>        
        </div>
      </div>
    </div>
  </div>
)

export default Track
