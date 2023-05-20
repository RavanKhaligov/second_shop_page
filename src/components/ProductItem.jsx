import React from 'react'

function ProductItem({id,gender,price,count,setAllProducts,allProducts,basket}) {
  function handleProducts(){
    const existingProduct = allProducts.find(i => i.id === id)
    if(basket){
        if(existingProduct.count !==1){
          existingProduct.count -=1;
          setAllProducts([...allProducts])
        }
        else{
          setAllProducts(allProducts.filter(i=> i.id !==id))
        }
    }
    else{
        if (existingProduct) {
          existingProduct.count += 1
          setAllProducts([...allProducts])
        } else {
          setAllProducts([...allProducts,{id,gender,price,count}])
        }
        
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
            {basket &&  <p>Count: {count}</p>}
        </div>
          <div className='btn-group'>
            <button className='btn' onClick={handleProducts}>{ !basket ? "Add to basket" : "Remove from basket"}</button>
          </div>
    </div>
  )
}

export default ProductItem
