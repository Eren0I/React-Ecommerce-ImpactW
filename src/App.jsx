import React, {useState} from 'react'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import shopdata from "./components/shopdata"
import Button from 'react-bootstrap/Button';
import StripeContainer from './components/StripeContainer'

function App() {
    const [showItem, setShowItem]= useState(false)
    return(
        <div className='stcont'>
<h1>W store</h1>
{showItem ?  <StripeContainer/> : <> <h4>$22</h4> <img src='/public/images/tech.png' alt="tshirt"/> <Button size="md" variant="info" onClick={() => setShowItem(true)}>Purchase</Button></>}
</div>
);}

export default App
