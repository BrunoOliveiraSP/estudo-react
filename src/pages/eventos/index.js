import './index.scss';

function Index() {
  return (
    <div className="page page-events">
      <header>
        <h1>Estudando ReactJS | Eventos</h1>
      </header>

      <main>
        <section>
          <h2>Olá seja bem-vindo</h2>

          <div>
            <input type='text' placeholder='Digite aqui' />
          </div>

          <div>
            <select>
              <option> Opção 1</option>
              <option> Opção 2</option>
              <option> Opção 3</option>
            </select>
          </div>

          <div>
            <input type='radio' name='escolha' /> Opção 1 &nbsp;&nbsp;&nbsp;&nbsp;
            <input type='radio' name='escolha' /> Opção 2
          </div>

          <div>
            <input type='checkbox' /> Opção 1 &nbsp;&nbsp;&nbsp;&nbsp;
            <input type='checkbox' /> Opção 2
          </div>

          <div>
            <button> Okay </button>
          </div>

        </section>
      </main>
    </div>
  );
}

export default Index;
