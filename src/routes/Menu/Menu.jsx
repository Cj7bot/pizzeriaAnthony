import './Menu.css';

export function Menu() {
  return (
    <div className="menu">
      <div className="menu-container">
        <img src="src/img/pizza americana.webp" alt="Pizza Americana" className="image" />
        <p className="text">Pizza Americana</p>
        <p>S/. 27.90</p>
        <button className="button">Agregar</button>
      </div>

      <div className="menu-container2">
        <img src="src/img/pizza-espanola.png" alt="Pizza Española" className="image" />
        <p className="text">Pizza Española</p>
        <p>S/. 29.90</p>
        <button className="button">Agregar</button>
      </div>

      <div className="menu-container">
        <img src="src/img/pizza-super-margarita.webp" alt="Pizza Americana" className="image" />
        <p className="text">Pizza Margarita - 6 Quesos</p>
        <p>S/. 24.90</p>
        <button className="button">Agregar</button>
      </div>

      <div className="menu-container">
        <img src="src/img/pizza-hawaiana.png" alt="Pizza Americana" className="image" />
        <p className="text">Pizza Hawaiana</p>
        <p>S/. 24.90</p>
        <button className="button">Agregar</button>
      </div>

      <div className="menu-container">
        <img src="src/img/pizza-mozzarella.png" alt="Pizza Americana" className="image" />
        <p className="text">Pizza Mozzarella</p>
        <p>S/. 20.90</p>
        <button className="button">Agregar</button>
      </div>
    </div>
  );
}
