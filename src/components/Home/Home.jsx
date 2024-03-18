import './Home.css'
import ReactPlayer from 'react-player'
import { ProductList } from '../Product/ProductList'

function Home() {
  

const imageUrl = 'https://cdn.coverr.co/videos/coverr-a-girl-wearing-many-pieces-of-jewelry-5100/1080p.mp4'
  return(
    <div className='home'>
      
      <video
      style={{filter: "contrast(2)",filter: "brightness(0.3)" }}
      
      width={"100%"}
        muted
 
        autoPlay
        loop
         >
      <source 
        src={imageUrl} 
        type="video/mp4"/>
     </video>

      <div className={'sidebar'}>
        <ul>
          <li>Item1</li>
          <li>Item1</li>
          <li>Item1</li>
          <li>Item1</li>
          <li>Item1</li>
        </ul>
      </div>
      <div className={"right"}>
        <h2>webshop</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque impedit provident, aliquam magni dolore eos obcaecati est et cumque harum libero incidunt illum eligendi fugiat, placeat exercitationem iure facilis unde iusto molestiae! Asperiores dolore minus, quam, ut vero nesciunt debitis ea corrupti deserunt iure fugit inventore placeat dolor molestias?</p>
        
      </div>
      <ProductList/>
    </div>
  )
}


export {Home}
