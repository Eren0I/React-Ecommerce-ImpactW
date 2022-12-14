import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navnew from "./components/Navbar"
import Header from "./components/Header"
import Cardcomp from "./components/Card"
import Shophead from "./components/Shophead"
import './index.css'
import shopdata from "./components/shopdata"
import Register from "./components/Register"
import Testimonial from "./components/Testimonial"


const cards = shopdata.map(item=>{
  return(
      <Cardcomp 
          key={item.id}
          {...item}
      />
  )
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navnew />
  <Header />
  <Testimonial className="testi" />
  <Shophead />
  <section className="cards-list">
{cards}
  </section>
  <App />
  <Register/>
  </React.StrictMode>
)
