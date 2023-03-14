import React from 'react'
import ProductItem from './ProductItem'

function Products({setAllProducts,allProducts,myProducts,basket}) {
  
  return (
    <section className='section-products'>
        <div className='inner-products'>
            {basket && allProducts.length ===0 ? <h2>There is no item</h2> 
            :<>
                {!basket && 
            <div className='products-header'>
                <h2>Our <span>Products</span></h2>
                <hr/>
            </div>}
            <div className='flex'>
                {basket ? allProducts.map(item=>(
                    <ProductItem key={item.id} id={item.id} gender = {item.gender} setAllProducts={setAllProducts} price = {item.price} allProducts={allProducts} basket/> 
                ))
                : myProducts.map(item =>(
                    <ProductItem key={item.id} id={item.id} gender = {item.gender} price = {item.price} setAllProducts = {setAllProducts} allProducts={allProducts}/>
                ))
                }
                
            </div>
            {!basket && 
            <div className='btn-view'>
                <button className='btn'>View All Products</button>
            </div>}
            </> }
        </div>
    </section>
  )
}

export default Products