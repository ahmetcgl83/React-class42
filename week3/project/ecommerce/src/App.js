import React from "react";
import { FavoritesProvider } from "./context/FavoritesContext";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Products from "./pages/Products";

function App() {
	return (
		<FavoritesProvider>
			<Routes>
				<Route path="/" element={<Menu />}>
					<Route path="/" element={<Home />} />
					<Route path="favorites" element={<Favorites />} />
					<Route path="product/:id" element={<Products />} />
				</Route>
			</Routes>
		</FavoritesProvider>
	);
}

export default App;
