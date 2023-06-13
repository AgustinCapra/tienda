import { NavBar } from "./component/NavBar"
import { ItemListContainer } from "./component/ItemListContainer"

export default function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a tu tienda de cartuchos!" />
    </>
  )
}
