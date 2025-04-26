import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <div>
            <Link to="/">Inicio</Link>
            <Link to="/ShoppingCart">Carro de Compras</Link>
        </div>
    )
}
