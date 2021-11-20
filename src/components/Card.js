import React from "react"

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} width="250" className="card--image" alt="" />
      <div className="card--stats">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/220px-Red_star.svg.png" width="15"  className="card--star" alt="" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

