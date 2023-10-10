import React from "react";
import "../Header/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Stateprovider";
import { auth } from "../Authentication/Firebase";
function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
	const handleAuthenticaton = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to={!user && "/login"}>
					<div onClick={handleAuthenticaton} className="header__option">
						<span className="header__optionLineOne">
							Hello {!user ? "Guest" : user.email}
						</span>
						<span className="header__optionLineTwo">
							{!user ? "sign In" : "sign Out"}
						</span>
					</div>
				</Link>

				<Link to="/Orders" className="headr-clearlink">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>

				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
			</div>
			<Link to="/checkout" className="header-clearlink">
				<div className="header__optionBasket">
					<ShoppingCartIcon />
					<span className="header__optionLineTwo header__basketCount">
						{basket.length}
					</span>
				</div>
			</Link>
		</div>
	);
}

export default Header;
