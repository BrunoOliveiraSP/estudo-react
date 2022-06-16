import './index.scss';

function Index() {
  return (
    <div className="page page-variavelEstado">
      <header>
        <h1>Estudando ReactJS | Variável de Estado</h1>
      </header>

      <main>
        
        <section>
          <h2>Digite na caixa de Texto</h2>
          
          <div>
            <input type='text' value='Digite na caixa de Texto' />  
          </div>
        </section>



        <section>
          <h2>Csharp</h2>
          
          <div>
            <select>
              <option>CSharp</option>
              <option>Javascript</option>
              <option>HTML</option>
              <option>CSS</option>
              <option>Java</option>
              <option>Python</option>
            </select>
          </div>
        </section>

        

        <section>
          <h2>Selecionado? Não</h2>
          
          <div>
            <input type='checkbox' />  Opção
          </div>
        </section>




        
        <section>
          <h2>Clique no botão para atualizar esse texto</h2>
          
          <div className='f-row'>
            <input type='text'/> 
            <button>Atualizar</button>
          </div>
        </section>



        

        <section>
          <h2>Somar dois números</h2>
          
          <div className='f-row'>
            <input type='number' /> 
            <input type='number' /> 
            <button>Somar</button>
            <label>0</label>
          </div>
        </section>



        <section>
          <h2>Sobre mim</h2>
          
          <div className='f-row'>
            <input type='text' placeholder='Informe seu Nome' /> 
            <input type='date' /> 
          </div>
          
          <div className='f-row sobremim'>
            <input type='number' placeholder='Altura' />
            <input type='number' placeholder='Peso' />
            <div><input type='checkbox' /> Trabalha</div>
            <button>Visualizar</button>
          </div>

          
          <h2 className='ficha'> Ficha </h2>

          <div className='ficha-form'>
            <div>
              <label>Nome:</label>
              <p>Bruno</p>
            </div>

            <div>
              <label>Nascimento:</label>
              <p>22/10/1989 (32 anos)</p>
            </div>

            <div className='f-row form'>
              <div>
                <label>Altura:</label>
                <p>1,80</p>
              </div>
              <div>
                <label>Altura:</label>
                <p>1,80</p>
              </div>
              <div>
                <label>IMC:</label>
                <p>19.75</p>
              </div>
            </div>

            <div>
              <label>Trabalha:</label>
              <p> Sim </p>
            </div>
          </div>
          
        
        </section>








        
        
        <section>
          <h2>Metas para os próximos 5 anos</h2>
          
          <div className='f-row'>
            <input type='text' placeholder='Digite aqui a meta' /> 
            <button>Adicionar</button>
          </div>

          <ul>
            <li>Tirar a carteira de habilitação</li>
            <li>Ser Pleno em uma empresa</li>
            <li>Dar entrada em meu primeiro carro</li>
            <li>Viajar para outro estado</li>
            <li>Ajudar meus pais em casa</li>
            <li>Fazer uma doação anônima</li>
            <li>Ler 10 livros sobre assuntos que me facinam</li>
          </ul>
        </section>

 
        

        

        
        <section>
          <h2>Meus Planos Atuais</h2>
          
          <div className='f-row planos'>
            <input type='text' placeholder='Digite aqui o plano' /> 
            <input type='text' placeholder='Cód. cor'/>             
          </div>
          <div className='f-row'>
            <input type='text' placeholder='Digite a situação' /> 
            <button>Adicionar</button>
          </div>


          <div className='planos-lista'>
            
            <div className='plano'>
              <div></div>
              <div>Terminar o Ensino Médio</div>
              <div>
                <div>Situação</div>
                <div>falta 1 ano</div>
              </div>
              <div className='acoes'>
                <img src='/assets/images/icon-editar.svg' alt='' />
                <img src='/assets/images/icon-remover.svg' alt='' />
              </div>
            </div>

            <div className='plano'>
              <div></div>
              <div>Terminar o Ensino Médio</div>
              <div>
                <div>Situação</div>
                <div>falta 1 ano</div>
              </div>
              <div className='acoes'>
                <img src='/assets/images/icon-editar.svg' alt='' />
                <img src='/assets/images/icon-remover.svg' alt='' />
              </div>
            </div>

            <div className='plano'>
              <div></div>
              <div>Terminar o Ensino Médio</div>
              <div>
                <div>Situação</div>
                <div>falta 1 ano</div>
              </div>
              <div className='acoes'>
                <img src='/assets/images/icon-editar.svg' alt='' />
                <img src='/assets/images/icon-remover.svg' alt='' />
              </div>
            </div>

            
          </div>
        </section>



      </main>
    </div>
  );
}

export default Index;
