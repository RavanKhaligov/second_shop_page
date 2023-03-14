import React from 'react'

function ProductItem({id,gender,price,setAllProducts,allProducts,basket}) {
  function handleProducts(){
    if(basket){
      setAllProducts(allProducts.filter(i=> i.id!==id))
    }
    else{
      console.log(id,gender,price)
      setAllProducts([...new Set([...allProducts,{id:id,gender:gender,price:price}])]) 
    }

  }
  return (
    <div className='product-box'>
        <div className='product-img flex'>
            <img src={`https://themewagon.github.io/famms/images/p${id}.png`} alt="product" />
        </div>
        <div className='product-info flex'>
            <h4>{gender === 'male' ? "Men's Shirt" : "Women's Dress"}</h4>
            <p>${price}</p>
        </div>
          <div className='btn-group'>
            <button className='btn' onClick={handleProducts}>{ !basket ? "Add to basket" : "Remove from basket"}</button>
          </div>
    </div>
  )
}

export default ProductItem