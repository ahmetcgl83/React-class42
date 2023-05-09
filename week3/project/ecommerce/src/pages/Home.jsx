import React, { useState } from "react";
import Categories from "../components/Categories";
import Cards from "../components/Cards";

function Home() {
	const [categories, setCategories] = useState("");

	return (
		<>
			<h1>Products</h1>
			<div className="menu">
				<Categories
					categories={categories}
					setCategories={setCategories}
				/>
			</div>
			<Cards categories={categories} />
		</>
	);
}

export default Home;
