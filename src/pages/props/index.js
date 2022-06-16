import './index.scss';

function Index() {
  return (
    <div className="page page-props">
      <header>
        <h1>Estudando ReactJS | Props</h1>
      </header>

      <main>

        <div className='form'>
          <div>
            <input type='text' placeholder='Título 1' />
            <input type='text' placeholder='Título 2' />
          </div>
          <div>
            <input type='text' placeholder='Link Imagem 1' />
            <input type='text' placeholder='Link Imagem 2'/>
          </div>
          <div>
            <textarea placeholder='Descrição 1' />
            <textarea placeholder='Descrição 2' />
          </div>
        </div>
        
        
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


      </main>
    </div>
  );
}

export default Index;
