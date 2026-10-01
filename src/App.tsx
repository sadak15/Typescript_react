import './App.css'
import Welcome from './components/Welcome'
import ProductCard from './components/ProductCard'
import ProductCardWithType from './components/ProductCardWithType'

function App() {
  return (
    <>
      <Welcome username="Ahmed" isPremium={true} />
      <Welcome username="Visitor" isPremium={false} />

      <ProductCard name="Keyboard" price={49.99} description="Mechanical, RGB" />
      <ProductCard name="Mouse" price={19.5} />

      <ProductCardWithType name="Monitor" price={199} description="27 inch, 144Hz" />

      {/* 4. Break it on purpose: remove the comment below to see the error.
          Type 'string' is not assignable to type 'number'. */}

      {/* <ProductCard name="Sticker" price="free" /> */}
    </>
  )
}

export default App
