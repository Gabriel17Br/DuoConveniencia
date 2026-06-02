import "../styles/Products.css";

function Products() {
  return (
    <section className="products">
      <h2>Produtos em Destaque</h2>

      <div className="products-grid">

        <div className="card">
          <h3>Coca-Cola 2L</h3>
          <p>R$ 9,99</p>
          <button>Comprar</button>
        </div>

        <div className="card">
          <h3>Doritos</h3>
          <p>R$ 12,99</p>
          <button>Comprar</button>
        </div>

        <div className="card">
          <h3>Chocolate Lacta</h3>
          <p>R$ 7,99</p>
          <button>Comprar</button>
        </div>

      </div>
    </section>
  );
}

export default Products;