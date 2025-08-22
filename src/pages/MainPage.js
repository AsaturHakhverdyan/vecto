import { useState } from "react";
import MoviesSlider from "../components/MoviesSlider";
import { useGetSingleMovie } from "../utils/useGetSingleMovie";
import Sidebar from "../components/LeftSideBar";
import ButtonsSide from "../components/ButtonsSide";
import convertRatingToEuropean from "../utils/convertRatingToEuropean";

const MainPage = () => {
	const [active, setActive] = useState(1);
	const [movieId, setMovieId] = useState(
		sessionStorage.getItem("movieId") || "tt0848228"
	);

	const { movie, loading } = useGetSingleMovie(movieId);

	const rating = convertRatingToEuropean(movie?.Rated);

	if (loading) {
		return <p className="text-center text-xl">Loading...</p>;
	}

	return (
		<section className="relative h-screen overflow-hidden">
			<div className="h-screen bg-gradient-to-r from-black via-black/70 to-transparent">
				<div>
					<Sidebar
						active={active}
						setActive={setActive}
					/>
				</div>
				<div>
					<img
						src={movie?.Poster}
						alt="poster"
						className="w-full h-full absolute top-0 left-0 object-cover z-[-999]"
					/>
				</div>
				<div className="text-left text-white z-10 w-full pl-[100px]">
					<p className="pt-[100px] text-[20px] text-gray-400">
						{movie?.Type
							? movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)
							: ""}
					</p>
					<h1 className="text-[50px] font-bold mt-[-18px] text-white">
						{movie?.Title}
					</h1>
					<div className="flex text-[20px]">
						<p>{movie?.Year}</p>
						<p className="mx-3">
							{rating === "not rating" ? rating : rating + "+"}
						</p>
						<p>{movie?.Runtime.split(" ").join("")}</p>
					</div>
					<div className="max-w-[700px]">
						<p className="text-[18px] text-white mt-2">
							{movie?.Plot.length > 300
								? movie?.Plot.slice(0, 300) + "..."
								: movie?.Plot}
						</p>
					</div>
					<ButtonsSide />
				</div>
			</div>
			<div className="absolute bottom-0 left-0 w-full z-20">
				<MoviesSlider setMovieId={setMovieId} />
			</div>
		</section>
	);
};

export default MainPage;
