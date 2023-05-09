import React, { useEffect } from "react";
import useFavorites from "../customHooks/useFavorites";
import useFetch from "../customHooks/useFetch";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";

function Favorites() {
	const [favorites] = useFavorites();
	const [data, error, handleFetchData] = useFetch();

	useEffect(() => {
		handleFetchData("products");
	}, [handleFetchData]);

	if (favorites.length === 0) {
		return (
			<div>
				<h1>Favorites</h1>
				You haven't chosen any favorites yet!
			</div>
		);
	}
	return (
		<>
			<h1>Favorites</h1>
			<ul className="list">
				{error && <p>Error fetching data...</p>}
				{data.length === 0 && <Loading />}
				{data &&
					// eslint-disable-next-line array-callback-return -- this is to avoid the linter warning
					data.map((item) => {
						if (favorites.includes(item.id)) {
							return <ProductCard product={item} key={item.id} />;
						}
					})}
			</ul>
		</>
	);
}

export default Favorites;
