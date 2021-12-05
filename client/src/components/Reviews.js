import React from "react";
import StarRating from "./StarRating";

const Reviews = ({ reviews }) => {
	return (
		<div className="row mb-2 ">
			{reviews.map((review) => {
				return (
					<div class="col-lg-4 col-md-6 pb-4">
						<div
							key={review.id}
							className="card text-white bg-info "
							// style={{ maxWidth: "30%" }}
						>
							<div className="card-header d-flex justify-content-between">
								<span>{review.name}</span>
								<span>
									<StarRating rating={review.rating} />
								</span>
							</div>
							<div className="card-body">
								<p className="card-text">{review.review}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Reviews;
