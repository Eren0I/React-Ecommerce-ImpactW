import React from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import shopdata from "./components/shopdata"
import Cardcomp from './components/Card'

function App() {
const cards = data.map(item=>{
    return(
        <Cardcomp 
            key={item.id}
            {...item}
        />
    )
})
}

export default App
