import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import Landing from './Landing.jsx';
import ShoppingCart from './ShoppingCart.jsx'
import Productos from './Productos.jsx';
import {Provider} from 'react-redux'
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>     
      <BrowserRouter>
     <Routes>
      <Route path= "/" element={<Landing />}/>
      <Route path= "/ShoppingCart" element={<ShoppingCart />}/>
      <Route path= "/Productos" element={<Productos />}/>
     </Routes>
    </BrowserRouter> 
    </Provider>  
  </StrictMode>,
)
