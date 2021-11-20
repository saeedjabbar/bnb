import React from "react"

export default function Card(props) {
  let badgeText
  if (props.experience.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.experience.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}

      <img src={props.experience.coverImg} width="250" className="card--image" alt="" />

      <div className="card--stats">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/220px-Red_star.svg.png" width="15"  className="card--star" alt="" />
        <span>{props.experience.stats.rating}</span>
        <span className="gray">({props.experience.stats.reviewCount}) • </span>
        <span className="gray">{props.experience.location}</span>
      </div>
      <p>{props.experience.title}</p>
      <p><span className="bold">From ${props.experience.price}</span> / person</p>
    </div>
  )
}

