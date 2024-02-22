import { useState } from 'react';
import Sandm from './imagenes/sand-miga-01.jpg';
import Clasic from './imagenes/sand-clasic.jpg';
import Veg from './imagenes/sand-miga-02.jpg'
import './stylesheets/Cards.css';

const Cards = () => {
  const [mostrarTexto, setMostrarTexto] = useState(Array(3).fill(false));

  const toggleTexto = (index) => {
    setMostrarTexto((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const textoSandwichVegetariano = `¡Explora la deliciosa variedad de nuestros sandwiches vegetarianos! Cada bocado es una experiencia fresca y llena de sabor, fusionando ingredientes vegetarianos cuidadosamente seleccionados. Desde opciones clásicas como el sándwich de aguacate y tomate hasta creaciones únicas con hummus y vegetales asados, nuestros sandwiches vegetarianos te ofrecen una alternativa sabrosa y nutritiva. Disfruta de una combinación única de sabores vegetales frescos y sumérgete en la satisfacción de una experiencia gastronómica saludable. ¡Te invitamos a descubrir la excelencia del sabor y la calidad en cada mordisco de nuestros sandwiches vegetarianos!`;


  const textoSandwichesPremium = `¡Descubre el placer de sabores exquisitos con nuestra colección de sandwiches de miga premium! Cada bocado es una obra maestra de frescura, combinando finas capas de pan tierno con rellenos cuidadosamente seleccionados. Desde clásicos irresistibles hasta creaciones innovadoras, nuestros sandwiches de miga premium elevan el arte culinario a nuevas alturas. Experimenta la perfección en cada capa y disfruta de una experiencia gastronómica única con nosotros. ¡Bienvenido a la excelencia del sabor y la calidad en cada mordisco!`;

  const textoSandwichesClasicos = `¡Redescubre la auténtica tradición con nuestra exquisita colección de sandwiches clásicos! Cada bocado te transporta a la simplicidad y la delicia de las combinaciones atemporales. Desde el icónico jamón y queso hasta el reconfortante pollo con mayonesa, nuestros sandwiches clásicos están cuidadosamente elaborados para satisfacer los paladares más nostálgicos. Sumérgete en la familiaridad de sabores conocidos, elaborados con ingredientes de calidad y presentados con un toque de elegancia. Disfruta de la esencia de la simplicidad en cada mordisco con nuestros irresistibles sandwiches clásicos. ¡Una experiencia que nunca pasa de moda!`;

  return (
    <div className="card-group">
      <div className="card">
        <section>
        <img src={Veg} className="card-img-top" alt="..." /></section>
        <div className="card-body">
          <h5 className="card-title">Sandwiches Premium</h5>
          <p className="card-text">
            {mostrarTexto[0] ? textoSandwichesPremium : textoSandwichesPremium.slice(0, 100) + '... '}
            <span onClick={() => toggleTexto(0)} className="ver-mas">
              {mostrarTexto[0] ? 'Ver menos' : 'Ver más...'}
            </span>
          </p>
        </div>
      </div>
      <div className="card">
      <section>
        <img src={Clasic} className="card-img-top" alt="..." /></section>
        <div className="card-body">
          <h5 className="card-title">Sandwiches Clásicos</h5>
          <p className="card-text">
            {mostrarTexto[1] ? textoSandwichesClasicos : textoSandwichesClasicos.slice(0, 100) + '... '}
            <span onClick={() => toggleTexto(1)} className="ver-mas">
              {mostrarTexto[1] ? 'Ver menos' : 'Ver más...'}
            </span>
          </p>
        </div>
      </div>
      <div className="card">
      <section>
        <img src={Sandm} className="card-img-top" alt="..." /></section>
        <div className="card-body">
          <h5 className="card-title">Sandwiches Vegetarianos</h5>
          <p className="card-text">
            {mostrarTexto[2] ? textoSandwichVegetariano : textoSandwichesClasicos.slice(0, 100) + '... '}
            <span onClick={() => toggleTexto(2)} className="ver-mas">
              {mostrarTexto[2] ? 'Ver menos' : 'Ver más...'}
            </span>
          </p>
        </div>
      </div>
      {/* Otras tarjetas */}
    </div>
  );
};

export default Cards;
