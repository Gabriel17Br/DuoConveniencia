import logo from "../assets/logo.png";


<div className="logo-container">
  <img src={logo} alt="Logo DuoConveniência" className="logo"/>
  <h2>DuoConveniência</h2>
</div>

function Navbar() {
  return (
    <nav className="navbar">
      <h2>DuoConveniência</h2>

      <ul>
        <li>Início</li>
        <li>Produtos</li>
        <li>Promoções</li>
        <li>Contato</li>
      </ul>

      <div className="navbar-icons">
        <span>🔍</span>
        <span>🛒</span>
      </div>
    </nav>
  );
}

export default Navbar;