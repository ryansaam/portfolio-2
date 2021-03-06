import React from "react"

const DateNode = props => {
  return (
    <div className="date-node" style={{height: props.radius+"px", width: props.radius+"px", color: props.textColor}}>
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <circle style={{fill: props.bgColor}} cx="25" cy="25" r="25"/>
        <text x="50%" y="27" dominantBaseline="middle" textAnchor="middle" style={{fill: props.textColor, fontSize: "22px"}}>{props.number}</text>
      </svg>
    </div>
  )
}

export default DateNode