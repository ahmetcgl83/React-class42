import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import useFavorites from "../customHooks/useFavorites";
import heartSolid from "../assets/heart-solid.svg";
import heartRegular from "../assets/heart-regular.svg";
import Loading from "../components/Loading";

function Products() {
	const { id } = useParams();
	const [data, error, handleFetchData] = useFetch();
	const [favorites, handleClick] = useFavorites();

	useEffect(() => {
		handleFetchData(`products/${id}`);
	}, [handleFetchData, id]);

	return (
		<>
			{error && <p>Error fetching data...</p>}
			{data && Object.keys(data).length !== 0 ? (
				<>
					<h1>{data.title}</h1>
					<div className="div-item">
						<p>{data.description}</p>
						<img src={data.image} alt={data.title} />
						<img
							src={
								favorites.includes(Number(id))
									? heartSolid
									: heartRegular
							}
							alt="heart"
							className="heart"
							onClick={() => handleClick(Number(id))}
						/>
					</div>
				</>
			) : (
				<Loading />
			)}
		</>
	);
}

export default Products;
