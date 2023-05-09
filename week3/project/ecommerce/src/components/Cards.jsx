import React, { useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

function Cards({ categories }) {
	const [data, error, handleFetchData] = useFetch();

	useEffect(() => {
		if (categories !== "") {
			handleFetchData(`products/category/${categories}`);
		} else {
			handleFetchData("products");
		}
	}, [categories, handleFetchData]);

	return (
		<>
			{error && <p>Error fetching data...</p>}
			{data.length === 0 && <Loading />}
			<ul className="list">
				{data.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</ul>
		</>
	);
}

export default Cards;
