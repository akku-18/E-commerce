import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { Context } from "../../utils/context";
import "./Header.scss";
import { useContext, useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const {cartCount} = useContext(Context);

  const [scrolled, setscrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate()

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 250) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate('/')} >Home</li>
            <li>About</li>
            <li><a href="#category" className="header-category" >Category</a></li>
          </ul>
          <div className="center" onClick={() => navigate('/')} >WooCommerce</div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch  (true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)} >
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      { showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
