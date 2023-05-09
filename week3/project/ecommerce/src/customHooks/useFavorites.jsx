import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function useFavorites() {
	const { favorites, setFavorites } = useContext(FavoritesContext);

	const handleClick = (id) => {
		if (favorites.includes(id)) {
			setFavorites(favorites.filter((favorite) => favorite !== id));
		} else {
			setFavorites([...favorites, id]);
		}
	};

	return [favorites, handleClick];
}

export default useFavorites;
