import {} from 'react';
import '../css/estilo.css';
import Produto from '../assets/produto.png'

function Portifolio() {

  return (
    <>
      <section className="portifolio">

        <h1>Nossos Produtos</h1>

        <div className="card">
                <img src={Produto}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do produto a ser vendido</p>
                <button className='btn'>R$ 100,00</button>
            </div>      

            <div className="card">
                <img src={Produto}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do produto a ser vendido</p>
                <button className='btn'>R$ 100,00</button>
            </div> 

            <div className="card">
                <img src={Produto}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do produto a ser vendido</p>
                <button className='btn'>R$ 100,00</button>
            </div> 
      </section>
    </>
  );
}
export default Portifolio;