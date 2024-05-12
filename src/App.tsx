import Header from "./components/Header/Header.component"
import './assets/style/index.css'
import Hero from "./components/Hero/Hero.component"
import { CartContextProvider } from "./components/Context/CartContext"

function App() {

  return (
    <CartContextProvider>
      <Header/>
      <Hero/>
    </CartContextProvider>
  )
}

export default App
