import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../constants/constants";

export function useGetMovies(query = "Avengers") {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!query) return;
		const fetchMovies = async () => {
			setLoading(true);
			setError(null);
			try {
				const res = await fetch(
					`${BASE_URL}?apikey=${API_KEY}&s=${query}&type=movie`
				);
				const data = await res.json();
				if (data.Response === "True") {
					setMovies(data.Search);
				} else {
					setError(data.Error);
				}
			} catch (err) {
				setError("something went wrong...");
			} finally {
				setLoading(false);
			}
		};
		fetchMovies();
	}, [query]);

	return { movies, loading, error };
}
