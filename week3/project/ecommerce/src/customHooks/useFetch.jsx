import { useState } from "react";

export default function useFetch() {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");

	async function handleFetchData(endpoint = "") {
		try {
			const response = await fetch(
				`https://fakestoreapi.com/${endpoint}`
			);
			const json = await response.json();
			setData(json);
		} catch (e) {
			setError(e.message);
		}
	}
	return [data, error, handleFetchData];
}
