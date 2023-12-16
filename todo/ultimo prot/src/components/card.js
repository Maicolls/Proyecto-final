import React from 'react'

function Card(props) {
  return (
    <div>
        <div className="row">
            <div className="card mx-5 my-5" style={{width: "18rem"}}>
                <img src={props.img} className="card-img-top col" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">Ir a la página</a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Card