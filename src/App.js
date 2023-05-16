
import Sample1 from './components/Sample1';
import Sample10 from './components/Sample10';
import Sample2 from './components/Sample2';
import Sample3 from './components/Sample3';
import Sample4 from './components/Sample4';
import Sample5 from './components/Sample5';
import ProductPage from './components/Sample6/ProductPage';
import ProductsTable from './components/Sample6/ProductsTable';
import Sample7 from './components/Sample7';
import Sample8 from './components/Sample8';
import Sample9 from './components/Sample9';
import {  Routes, Route } from "react-router-dom";

import Users from './components/Pages/Users';
// import HomePage from './components/Pages/HomePage';
import UsersPost from './components/Pages/UsersPost';
import AntdTable from './components/Antd/AntdTable';
import SupplierForm from './components/Antd/SupplierForm';
import AntdPage from './components/Antd/AntdPage';
import Login from './components/ContextExample/Login';
import Profile from './components/ContextExample/Profile';
import HomePage from './components/ContextExample/HomePage';
import { LoginContext } from './components/ContextExample/Context';
import { useState } from 'react';
import FormikSample from './components/Antd/FormikSample';
function App() {

  const[loggedIn,setLoggedIn]=useState(false)
  return (
    <>
    {/* <Sample1/> */}
    {/* <Sample2/> */}
    {/* <Sample3/> */}
    {/* <Sample4/> */}
    {/* <Sample5/> */}
   {/* <ProductsTable/>
   <ProductPage/> */}
   {/* <Sample7/> */}
   {/* <Sample8/> */}
   {/* <Sample9/> */}
   {/* <Sample10/> */}
   {/* <Routes>
       
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/UsersPost/:id" element={<UsersPost/>} />
      
      </Routes> */}
      {/* {<Routes>
      <Route path="/" element={<AntdPage/>}/>
<Route path="/add" element={<SupplierForm/>}/>
      </Routes> } */}

{<Routes>
      <Route path="/" element={<AntdPage/>}/>
<Route path="/add" element={<FormikSample/>}/>
      </Routes> }
      {/* <div style={{display:'flex',justifyContent:"center",flexDirection:"column"}}>
  <LoginContext.Provider value={{loggedIn,setLoggedIn}}>
  <HomePage/>
 <Login/>
 <Profile/>
  </LoginContext.Provider>

</div> */}

    </>
  );
}

export default App;
