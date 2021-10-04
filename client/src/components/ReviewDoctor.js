import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import DoctorFinder from "../apis/DoctorFinder";
import StarRating from "./StarRating";
import Reviews from "./Reviews";

const ReviewDoctor = ({
	isReviewSeen,
	doctor,
	reviews,
	setIsReviewSeen,
	setReviews,
	count,
	setCount,
	averageRating,
	setAverageRating,
}) => {
	const [name, setName] = useState("");
	const [reviewText, setReviewText] = useState("");
	const [rating, setRating] = useState("Rating");

	const handleSubmitReview = async (e) => {
		e.preventDefault();
		try {
			const response = await DoctorFinder.post(`/${doctor.id}/addReview`, {
				name,
				review: reviewText,
				rating,
			});
			count++;
			setCount(count);

			setReviews((prevReviews) => [...prevReviews, response.data.data.review]);

			setAverageRating((prev) => {
				return (prev * (count - 1)) / count + Number(rating) * (1 / count);
			});

			setName("");
			setRating("Rating");
			setReviewText("");
		} catch (err) {}
	};

	return (
		<div
			style={{
				display: isReviewSeen ? "block" : "none",
				position: "fixed",
				left: "0",
				right: "0",
				top: "0",
				bottom: "0",
				backgroundColor: "grey",
				padding: "20px",
				overflowY: "auto",
			}}
		>
			<button
				onClick={(e) => {
					e.stopPropagation();
					setIsReviewSeen(false);
				}}
			>
				X
			</button>
			<h1 className="text-center display-1">{doctor.name}</h1>
			<div className="text-center">
				<StarRating rating={averageRating} />
				<span className="text-warning ml-1">{`(${count || 0})`}</span>
			</div>
			<div className="mt-3">
				<Reviews reviews={reviews} />
			</div>

			<div className="mb-2">
				<form action="">
					<div className="form-row">
						<div className="form-group col-8">
							<label htmlFor="name">Name</label>
							<input
								value={name}
								onChange={(e) => setName(e.target.value)}
								id="name"
								placeholder="name"
								type="text"
								className="form-control"
							/>
						</div>
						<div className="form-group col-4">
							<label htmlFor="rating">Rating</label>
							<select
								value={rating}
								onChange={(e) => setRating(e.target.value)}
								id="rating"
								className="custom-select"
							>
								<option disabled>Rating</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="Review">Review</label>
						<textarea
							value={reviewText}
							onChange={(e) => setReviewText(e.target.value)}
							id="Review"
							className="form-control"
						></textarea>
					</div>
					<button
						type="submit"
						onClick={handleSubmitReview}
						className="btn btn-primary"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default ReviewDoctor;
