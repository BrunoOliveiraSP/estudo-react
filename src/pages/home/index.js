import { Link } from 'react-router-dom';
import './index.scss';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> Estudo de ReactJS </h2> 

        <div>
          <Link to='/componentes'> Componentes </Link>
        </div>
        <div>
          <Link to='/props'> Props </Link>
        </div>
        <div>
          <Link to='/eventos'> Eventos </Link>
        </div>
        <div>
          <Link to='/variavelEstado'> Variáveis de Estado </Link>
        </div>
        <div>
          <Link to='/renderizacao'> Renderização </Link>
        </div>
        <div>
          <Link to='/api'> API </Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
