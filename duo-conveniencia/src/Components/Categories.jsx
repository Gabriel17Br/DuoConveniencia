import "../styles/Categories.css";

function Categories() {
  return (
    <section className="categories">
      <h2>Categorias</h2>

      <div className="categories-grid">
        <div className="category">🥤 Bebidas</div>
        <div className="category">🍫 Doces</div>
        <div className="category">🍟 Salgados</div>
        <div className="category">🧼 Higiene</div>
      </div>
    </section>
  );
}

export default Categories;