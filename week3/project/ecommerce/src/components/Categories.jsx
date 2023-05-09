import React, { useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import Loading from "./Loading";

export default function Categories({ categories, setCategories }) {
	const [data, error, handleFetchData] = useFetch();

	useEffect(() => {
		handleFetchData("products/categories");
	}, [handleFetchData]);

	function handleClick(event) {
		const selectedCategory = event.target.innerHTML;
		setCategories(selectedCategory === categories ? "" : selectedCategory);
	}

	if (error) {
		return <p>Error fetching data...</p>;
	}

	if (data.length === 0) {
		return <Loading />;
	}

	return (
		<ul className="menu">
			{data.map((category) => (
				<li
					key={category}
					className={
						categories === category
							? "menu-item color"
							: "menu-item"
					}
					onClick={handleClick}
				>
					{category}
				</li>
			))}
		</ul>
	);
}
