import React from "react";
import useFavorites from "../customHooks/useFavorites";
import heartSolid from "../assets/heart-solid.svg";
import heartRegular from "../assets/heart-regular.svg";
import { Link } from "react-router-dom";

function Item({ product: { id, image, title } }) {
	const [favorites, handleClick] = useFavorites();

	return (
		<li className="list-item">
			<div>
				<img src={image} alt={title} />
				<img
					src={favorites.includes(id) ? heartSolid : heartRegular}
					alt="heart"
					onClick={() => handleClick(id)}
					className="heart"
				/>
				<Link to={`/product/${id}`}>{title}</Link>
			</div>
		</li>
	);
}

export default Item;
