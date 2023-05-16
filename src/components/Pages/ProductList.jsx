import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ProductListDetail from './ProductListDetail'

function ProductList(props) {
  let{productlist}=props


    //   const navigate=useNavigate()
    //   function click(){
    //     navigate("/about")
    //   }
    //Navigate vasitesile yonlendirme edirsen komponent daxilinde. yeni ki burda td ye click edende about page-e kecid edir
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>price</td>
          </tr>
        </thead>
        <tbody>
          {productlist.map(item => (
            <tr key={item.id}>
              {/* <td onClick={()=>click()}>{item.name}</td> */}
              <td> {item.name}</td>
              <td>{item.price}</td>
              <td> <button >   <Link to={`/productlist/${item.id}`}>{item.name}</Link></button></td>
            </tr>
          ))}
        </tbody>
      </table>

    {/* <ProductListDetail productlist={productlist}/> */}
    </>
  )
}

export default ProductList
