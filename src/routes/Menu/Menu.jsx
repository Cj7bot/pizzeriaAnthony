import './Menu.css'

export function Menu () {
  return (
    <div className="menu-container">
      <img src="src/img/pizza americana.webp" alt="Pizza Americana" className="image" />
      <p className="text">Pizza Americana</p>
      <p>S/. 27.90</p>
      <button className="button">Agregar</button>
    </div>,
    <div className="menu-container2">
    <img src="src/img/pizza-espanola.png" alt="Ejemplo" className="image" />
    <p className="text">Pizza Española</p>
    <p>S/. 29.90</p>
    <button className="button">Agregar</button>
  </div>,
  <div className="menu-container">
  <img src="src/img/pizza americana.webp" alt="Ejemplo" className="image" />
  <p className="text">Pizza Americana</p>
  <p>S/. 27.90</p>
  <button className="button">Agregar</button>
</div>
  )
}
