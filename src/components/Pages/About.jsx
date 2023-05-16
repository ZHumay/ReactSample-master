import React from 'react'
import { useLocation } from 'react-router-dom';
import ProductListDetail from './ProductListDetail';
function About() {

  //Productlistdetailde navigate-e state verib burda location byektinin icinden goturmek olar. amma yalniz go about 
  //buttonuna click etdikde about deyisib mesaji gosterecek, aboutpage-e click edende yox.cunki burda locatin.state ilk
  //olaraq undefined kimi gelir ve onu basa dusmur. ona gore ? ile yoxlama islemi apaririq varsa gosterir
  //yoxdusa null yeni ki icini bosaldir 
  const location=useLocation()
  const message = location.state ? location.state.message : null;

  return (
    <div>
      <h1> About page</h1>
      <p> {message}</p>
      <h2>Current URL: {location.pathname}</h2>
    </div>
  )
}

export default About
