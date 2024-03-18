import { Outlet } from "react-router-dom"

function Product() {
  return(
    <div className="product-wrappers">
      <h2>Product some-id</h2>
      <Outlet/>
    </div>
    
  )
}

export {Product}