import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import ProductList from './ProductList';


function ProductListDetail(props) {
let{productlist}=props
  const { id } = useParams();
  const navigate=useNavigate()
  const myProduct = productlist.find(item => item.id === parseInt(id));
 const go=()=>{
  navigate(-1) //arxaya qayidir
 }
 const goAbout=()=>{
  navigate("/about",{replace:true,state:{message:"Hello"}})
 }
  return (
    <div>
      <h1>{myProduct?.name}</h1>
      <h2>{myProduct?.price}</h2>
      <button onClick={()=>go()}> Go back</button>
      <button onClick={()=>goAbout()}> Go about</button>
    </div>
  )
}

export default ProductListDetail


