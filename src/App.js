import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Arrival from "./components/Arrival";
import CauseContent from "./components/CauseContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import MainSlider from "./components/Slider";
import Subscribe from "./components/Subscribe";

function App() {
  const myProducts = [
    {
        id:1,
        gender:"male",
        price:75
    },
    {
        id:2,
        gender:"male",
        price:80
    },
    {
        id:3,
        gender:"female",
        price:68
    },
    {
        id:4,
        gender:"female",
        price:70
    },
    {
        id:5,
        gender:"female",
        price:75
    },
    {
        id:6,
        gender:"female",
        price:58
    },
    {
        id:7,
        gender:"female",
        price:80
    },
    {
        id:8,
        gender:"male",
        price:65
    },
    {
        id:9,
        gender:"male",
        price:65
    },
    {
        id:10,
        gender:"male",
        price:65
    },
    {
        id:11,
        gender:"male",
        price:65
    },
    {
        id:12,
        gender:"female",
        price:65
    }, 
]

  const [allProducts,setAllProducts] = useState(JSON.parse(localStorage.getItem("item")) || [])
  useEffect(()=>{
    localStorage.setItem("item",JSON.stringify(allProducts))
  },[allProducts])
  return (
    <div className="App">
      <Header allProducts = {allProducts}/>
      <Routes>
        <Route path="/" element=
          {<>
            <MainSlider/>
            <CauseContent/>
            <Arrival/>
            <Products setAllProducts ={setAllProducts} allProducts={allProducts} myProducts={myProducts}/>
            <Subscribe/>
          </>}/>
        <Route path="/about" element=
          {<>
            <CauseContent/>
            <Arrival/>
          </>}/>
        <Route path='/products' element={<Products setAllProducts={setAllProducts} allProducts = {allProducts} myProducts ={myProducts}/>}/>
        <Route path='/blog' element=
          {<>
            <Arrival/>
            <Subscribe/>
          </>}/>
        <Route path='/basket'element={<Products allProducts = {allProducts} myProducts={myProducts} basket setAllProducts={setAllProducts}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
