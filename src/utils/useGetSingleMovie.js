import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../constants/constants";

export const useGetSingleMovie = (imdbID = "tt0848228") => {
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!imdbID) return;

		const fetchMovie = async () => {
			try {
				setLoading(true);
				setError(null);
				const res = await fetch(
					`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
				);
				const data = await res.json();

				if (data.Response === "True") {
					setMovie(data);
				} else {
					setError(data.Error);
				}
			} catch (err) {
				setError("something went wrong...");
			} finally {
				setLoading(false);
			}
		};

		fetchMovie();
	}, [imdbID]);

	return { movie, loading, error };
};
