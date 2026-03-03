import React, { useEffect, useState } from 'react'
import '../App.css'
import Template from './Template'
import ShowProduct from './ShowProduct'

function Product() {

  const [result, setResult] = useState(null)

  function fetchProduct() {

    if(localStorage.getItem("cache")){
      console.log("from cache", localStorage.getItem("cache"))
      setResult(JSON.parse(localStorage.getItem("cache")))
      return;
    }

    fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
      .then(json=>{
        setResult(json)
        localStorage.setItem("cache", JSON.stringify(json));
        console.log(json)
      })
  }

  //if(!result)
  //fetchProduct();


  useEffect(()=>{
    fetchProduct();
  }, [])
   

  if(!result)
  return (
    <div className="main-content common">
      <Template />
    </div>
  )
  else
  return (
    <div className="main-content common">
      <ShowProduct result={result} />
    </div>
  )
}

export default Product
