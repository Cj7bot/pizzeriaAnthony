import './Menu.css';

export function Menu() {
  return (
    <div>
      {/* Primer bloque de pizzas */}
      <div className="menu">
        <div className="menu-container">
          <img src="src/img/pizza americana.webp" alt="Pizza Americana" className="image" />
          <p className="text">Pizza Americana</p>
          <p>S/. 27.90</p>
          <button className="button">Agregar</button>
        </div>

        <div className="menu-container">
          <img src="src/img/pizza-espanola.png" alt="Pizza Española" className="image" />
          <p className="text">Pizza Española</p>
          <p>S/. 29.90</p>
          <button className="button">Agregar</button>
        </div>

        <div className="menu-container">
          <img src="src/img/pizza-super-margarita.webp" alt="Pizza Súper Margarita" className="image" />
          <p className="text">Pizza Margarita - 6 Quesos</p>
          <p>S/. 24.90</p>
          <button className="button">Agregar</button>
        </div>

        <div className="menu-container">
          <img src="src/img/pizza-hawaiana.png" alt="Pizza Hawaiana" className="image" />
          <p className="text">Pizza Hawaiana</p>
          <p>S/. 24.90</p>
          <button className="button">Agregar</button>
        </div>

        <div className="menu-container">
          <img src="src/img/pizza-mozzarella.png" alt="Pizza Mozarella" className="image" />
          <p className="text">Pizza Mozzarella</p>
          <p>S/. 20.90</p>
          <button className="button">Agregar</button>
        </div>
      </div>

      {/* Segundo bloque de pizzas */}
      <div className="menu">
        <div className="menu-container">
          <img src="src/img/pizza-chicken-bbq.webp" alt="Pizza Chicken BBQ" className="image" />
          <p className="text">Pizza Chicken BBQ</p>
          <p>S/. 27.90</p>
          <button className="button">Agregar</button>
        </div>

        <div className="menu-container">
          <img src="src/img/pizza-vegetariana.png" alt="Pizza Vegetariana" className="image" />
          <p className="text">Pizza Vegetariana</p>
          <p>S/. 29.90</p>
          <button className="button">Agregar</button>
        </div>

        <div className="menu-container">
          <img src="src/img/pizza-pepperoni.png" alt="Pizza Pepperoni" className="image" />
          <p className="text">Pizza Pepperoni</p>
          <p>S/. 24.90</p>
          <button className="button">Agregar</button>
        </div>

        <div className="menu-container">
          <img src="src/img/pizza-continentalle.webp" alt="Pizza Continentalle" className="image" />
          <p className="text">Pizza Continentalle</p>
          <p>S/. 24.90</p>
          <button className="button">Agregar</button>
        </div>

        <div className="menu-container">
          <img src="src/img/pizza-la-favorita.webp" alt="Pizza La Favorita" className="image" />
          <p className="text">Pizza La Favorita</p>
          <p>S/. 20.90</p>
          <button className="button">Agregar</button>
        </div>
      </div>
    </div>
  );
}
