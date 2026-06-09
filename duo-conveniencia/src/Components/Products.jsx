import "../styles/Products.css";
import coca from "../assets/coca.png";
import doritos from "../assets/doritos.png";
import lacta from "../assets/lacta.png";
import pringles from "../assets/pringles.png"


function Products() {
  return (
    <section className="products">
      <h2>Produtos em Destaque</h2>

      <div className="products-grid">

        <div className="card">
          <div className="product-card">
            <img src={coca} alt="Coca-Cola" className="product-image" />

            <h3>Coca-Cola 2L</h3>
            <p>R$ 12,99</p>
          </div>

          <button>Comprar</button>
        </div>

        <div className="card">
          <div className="product-card">
            <img src={doritos} alt="Coca-Cola" className="product-image" />

            <h3>Doritos</h3>
            <p>R$ 9,99</p>
          </div>

          <button>Comprar</button>
        </div>

        <div className="card">
          <div className="product-card">
            <img src={lacta} alt="Coca-Cola" className="product-image" />

            <h3>Lacta</h3>
            <p>R$ 7,99</p>
          </div>

          <button>Comprar</button>
        </div>

        <div className="card">
          <div className="product-card">
            <img src={pringles} alt="Coca-Cola" className="product-image" />

            <h3>Pringles</h3>
            <p>R$ 27,99</p>
          </div>

          <button>Comprar</button>
        </div>

        

        
      </div>
    </section>
  );
}

export default Products;
