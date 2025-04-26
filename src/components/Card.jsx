import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import '../App.css';

export default function Card({product}) {
    const {title,img,price,description} = product
    const dispatch = useDispatch()

    return (
       <div className= 'card' >
        {title}
        <img src={img} alt="" />
        {price}
        {description}
        <button onClick={()=> dispatch(addToCart(product)) }>Agregar al Carrito</button>
        </div>)
       

}