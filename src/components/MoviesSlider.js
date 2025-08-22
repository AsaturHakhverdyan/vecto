import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useGetMovies } from "../utils/useGetMovies";
import "../index.css";

const MoviesSlider = ({ setMovieId }) => {
	const { movies } = useGetMovies();
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 8,
			spacing: 5,
		},
	});

	const addIdToSession = id => {
		sessionStorage.setItem("movieId", id);
		setMovieId(id);
	};

	return movies.length ? (
		<>
			<p className="text-[30px] font-bold text-white">Tranding Now</p>
			<div
				ref={sliderRef}
				className="keen-slider"
			>
				{movies.map((movie, index) => (
					<div
						key={movie.imdbID}
						className={`keen-slider__slide number-slide${index + 1}`}
						onClick={() => addIdToSession(movie.imdbID)}
					>
						<img
							src={movie.Poster}
							alt="hello"
							className="object-cover w-full max-h-[200px]"
						/>
					</div>
				))}
			</div>
		</>
	) : null;
};

export default MoviesSlider;
