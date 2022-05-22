import React from 'react'

function MovieCard(props) {
  return (
    <>
    <div className="card" id={props.id}>
  <img src={props.image} className="card-img-top" style={{width:"200px"}} />
  <div className="card-body"> 
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.year}</p>
    <a href="#" className="btn btn-primary">Explore </a>
  </div>
</div>
    </>
  )
}

export default MovieCard