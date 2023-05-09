import React, { useState } from "react";
import { createContext, useContext } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);

	const contextElements = {
		favorites,
		setFavorites,
	};

	return (
		<FavoritesContext.Provider value={contextElements}>
			{children}
		</FavoritesContext.Provider>
	);
};

export const useFavorites = () => useContext(FavoritesContext);
