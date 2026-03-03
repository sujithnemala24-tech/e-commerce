import React from 'react'
import '../App.css'

function ShowProduct({result}) {
  return (
    <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "40px" }}>
      {result.map((pt)=>{
        return (
          <div className="card">
            <h4> {pt.title.substring(0, 20)}... </h4>
            <img src={pt.image} alt="product" />
            <p> ₹{pt.price} </p>
          </div>
        )
      })}
    </div>
  )
}

export default ShowProduct
