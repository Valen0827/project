import NavBar from "./components/NavBar"
import plants from'./context/plants.json'
import Card from "./components/Card.jsx"
export default function Productos() {
    console.log(plants)
    const comboPlants = plants.filter((product)=> product.type === "Combo")
    const individualesPlants = plants.filter((product)=> product.type === "Combo")

    return (
       <div>
        <NavBar/>
        <h1>Productos</h1>
        {plants.map((product, index)=>(
            <Card key= {index} product={product}/>
        ))}
        <h2>combos</h2>
        {comboPlants.map((product, index) => (
          <Card key={index} product={product} />
        ))}
        <h2>individuales</h2>
        {individualesPlants.map((product, index) => (
          <Card key={index} product={product} />
        ))}

      </div>
    )
}
