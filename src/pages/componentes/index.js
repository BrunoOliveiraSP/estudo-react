import './index.scss';

function Index() {
  return (
    <div className="page page-components">
      <header>
        <h1>Estudando ReactJS | Componentes</h1>
      </header>

      <main>
        
        <section>
          <h2>Seção 1</h2>
          <div className='secao'>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.
            </div>
            <img src="/assets/images/square.svg" alt="" />
          </div>
        </section>

        <section>
          <h2>Seção 1</h2>
          <div className='secao inversa'>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.
            </div>
            <img src="/assets/images/square.svg" alt="" />
          </div>
        </section>

        <section>
          <h2>Seção 1</h2>
          <div className='secao centro'>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.
            </div>
            <img src="/assets/images/square.svg" alt="" />
          </div>
        </section>


      </main>
    </div>
  );
}

export default Index;
