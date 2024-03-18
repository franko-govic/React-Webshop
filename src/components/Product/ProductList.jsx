import { Link } from "react-router-dom"

function ProductList() {

  return(
    <ul>
      <li>PRODUCT1 </li>
      <li><Link to={'/product/2'}>Product 2</Link></li>
      <li>PRODUCT2 </li>
    </ul>
  )
}

export {ProductList}