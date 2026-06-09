import logo from "../assets/logo.png";
import "../Styles/NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo DuoConveniência"
          className="logo"
        />
        <h2>
          Duo<span>Conveniência</span>
        </h2>
      </div>

      <ul className="nav-links">
        <li className="active">Início</li>
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