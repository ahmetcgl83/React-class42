import React from "react";
import { Outlet, Link } from "react-router-dom";

function Menu() {
	return (
		<>
			<div className="menu-style">
				<Link to={`/`}>Products</Link>
				<Link to={`favorites`}>Favorites</Link>
			</div>
			<Outlet />
		</>
	);
}

export default Menu;
