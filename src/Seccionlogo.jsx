import Logo from './imagenes/logo.png'
import './stylesheets/Seclogo.css'
import 'react'

const Seccionlogo = () => {
  return (
    <div className='containerlogo container-fluid'><img  src={Logo} className="img-thumbnail" alt="..." />
    <div className='textologo'>
  <p>¡Bienvenido a Los Rodriguez, el hogar de los sandwiches de miga más deliciosos en todo Tucumán!</p>

  <p>Somos una fábrica apasionada que ha perfeccionado el arte de crear sandwiches de miga excepcionales. En el corazón de la hermosa provincia de Tucumán, nos enorgullece ofrecer una experiencia gastronómica única para aquellos que buscan sabores auténticos y frescura inigualable.</p>

  <p>En Los Rodriguez, cada sandwich es más que un bocado; es una obra maestra cuidadosamente elaborada. Nuestra tradición culinaria se refleja en cada capa de pan tierno que abraza combinaciones de ingredientes frescos y sabrosos. Desde clásicos reconfortantes hasta creaciones innovadoras, nuestra variedad de opciones satisface todos los gustos y preferencias.</p>

  <p>Ubicados estratégicamente en el corazón de Tucumán, nos esforzamos por ser la elección preferida de aquellos que buscan la excelencia en cada mordisco. Nuestro compromiso con la calidad, la autenticidad y la pasión por la comida nos distingue.</p>

  <p>Explora nuestro catálogo diverso y descubre por qué Los Rodriguez se ha convertido en sinónimo de sandwiches de miga extraordinarios. Ya sea para una reunión familiar, un almuerzo de negocios o simplemente para satisfacer antojos culinarios, estamos aquí para hacer de cada ocasión una experiencia memorable.</p>

  <p>¡Gracias por visitar Los Rodriguez en línea! Estamos encantados de compartir nuestra pasión por la comida contigo y esperamos que disfrutes cada momento sabroso con nosotros.</p>
</div>

    </div>
  )
}

export default Seccionlogo