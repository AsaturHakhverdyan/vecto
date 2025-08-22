const convertRatingToEuropean = rated => {
	if (!rated) return "Not Rated";

	const map = {
		G: "U",
		PG: "PG",
		"PG-13": "12",
		R: "15",
		"NC-17": "18",
		NR: "Not Rated",
	};
	return map[rated] || rated;
};
export default convertRatingToEuropean;
