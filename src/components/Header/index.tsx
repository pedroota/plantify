import {
  Search,
  User,
  ShoppingCart
} from "react-feather";
import logo from "@/assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="limiter-space">
        <nav className="nav">
          <ul className="ul">
            <li className="ul__list-item">
              <AnchorLink href="#shop">Shop</AnchorLink>
            </li>

            <li className="ul__list-item">
              <AnchorLink href="#products">Products</AnchorLink>
            </li>
            
            <li className="ul__list-item">
              <AnchorLink href="#fertilizer">Fertilizer</AnchorLink>
            </li>

            <li className="ul__list-item">
              <AnchorLink href="#guide">Guide</AnchorLink>
            </li>
          </ul>
        </nav>
        
        <img src={logo} className="logo" alt="Plantify Garden" />

        <div className="icons-header">
          <Search className="icons-header__icon"/>
          <User className="icons-header__icon" />
          <ShoppingCart className="icons-header__icon" />
        </div>
      </div>
    </header>
  );
}
