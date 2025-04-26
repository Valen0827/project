import NavBar from "./components/NavBar"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement,addToCart } from "./redux/cartSlice";

export default function ShoppingCart() {
    const cartItems = useSelector((state)=> state.cart.cartItems)
    console.log (cartItems)
    const dispatch = useDispatch()
    return (
     <div>
        <NavBar />
          <h1>Carro de Compras</h1>
          <Link to="/Productos">Volver</Link>

          {cartItems && cartItems.length > 0 ? (
             cartItems.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <img src={item.img} alt="" />
                <p>Cantidad:  {item.amount}</p>
                <button onClick={()=> dispatch(addToCart(decrement)) }>-</button>
                <button onClick={()=> dispatch(addToCart(increment)) }>+</button>
                
              </div>

            ))
        ) : (
            <p>No hay Productos</p>
                
        )}

     </div>
    )

}