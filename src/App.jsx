import './App.css'
import { Page } from './components/Page/Page'
import { Product } from './components/Product/Product'
import { SingleProduct } from './components/Product/SingleProduct'
import { Home } from './components/Home/Home'
import { Layout } from './components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about-us' element={<Page/>} />
          <Route path='/product' element={<Product/>}>
            <Route path='/product/:id' element={<SingleProduct/>}/>
          </Route>
        </Route>
      </Routes>
    
      </BrowserRouter>
    </>
  )
}

export default App
