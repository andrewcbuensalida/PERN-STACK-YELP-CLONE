import React from "react";
import StarRating from "./StarRating";

const Ratings = ({ count, averageRating }) => {
	if (!count) {
		return <span className="text-warning">0 reviews</span>;
	}
	return (
		<>
			<StarRating rating={averageRating} />
			<span className="text-warning ml-1">({count})</span>
		</>
	);
};
export default Ratings;
