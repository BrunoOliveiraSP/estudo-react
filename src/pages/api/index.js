import './index.scss';

function Index() {
  return (
    <div className="page page-api">
      <header>
        <h1>Estudando ReactJS | API</h1>
      </header>

      <main>
        
        <section>
          <h2>Correio</h2>
          <div className='secao1'>
            <div>
              <input type='text' placeholder='Informe o CEP' />
              <button> Buscar </button>
            </div>
            <div>
              <p> Av. Interlagos, 1000-1200, São Paulo / SP </p>
            </div>
          </div>
        </section>

        
        <section>
          <div className='secao2'>
            <h2>Buscar Filme ImDB</h2>
            <div>
              <input type='text' placeholder='Informe o Filme' />
              <img src='/assets/images/lupa.svg' alt='' />
            </div>
          </div>

          
          <table>
            <thead>
              <tr>
                <th>Cód. imDB</th>
                <th>Título</th>
                <th>Ano</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>13144</td>
                <td>A hora do Rush</td>
                <td>2007</td>
              </tr>
              <tr>
                <td>13144</td>
                <td>A hora do Rush</td>
                <td>2007</td>
              </tr>
              <tr>
                <td>13144</td>
                <td>A hora do Rush</td>
                <td>2007</td>
              </tr>
            </tbody>
          </table>
            
          
        </section>

        
      </main>
    </div>
  );
}

export default Index;
