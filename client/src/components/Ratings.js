import React from "react";
import StarRating from "./StarRating";

const Ratings = ({ doctor }) => {
	if (!doctor.count) {
		return <span className="text-warning">0 reviews</span>;
	}
	return (
		<>
			<StarRating rating={doctor.average_rating} />
			<span className="text-warning ml-1">({doctor.count})</span>
		</>
	);
};
export default Ratings;
