import './index.scss';

function Index() {
  return (
    <div className="page page-renderizacao">
      <header>
        <h1>Estudando ReactJS | Renderização</h1>
      </header>

      <main>
        
        <section>
          <h2>Biscoito da sorte</h2>
          <div className='secao1'>
            <div>
              <button> Abrir </button>
            </div>
            <div>
              <p> Sempre haverá pessoas melhores e piores em habilidades diferentes. Avance e ajude. </p>
            </div>
          </div>
        </section>

        
        <section>
          <h2>Friends Poser</h2>
          <div className='secao2'>
            <img src="/assets/images/certo.png" alt="" />
            <div>
              <p>Qual nome do personagem que ama dinossauros na série Friends?</p>
              <input type='text' placeholder='Responda aqui' />
            </div>
          </div>
        </section>

        
        <section>
          <nav>
            <ul>
              <li className='selecionado'>Informações</li>
              <li>Qualificações</li>
            </ul>
          </nav>

          <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.
          </div>
          
        </section>


      </main>
    </div>
  );
}

export default Index;
