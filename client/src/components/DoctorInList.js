import React, { useContext, useState, useEffect } from "react";
import Ratings from "./Ratings";
import { DoctorsContext } from "../context/DoctorsContext";
import DoctorFinder from "../apis/DoctorFinder";
import UpdateDoctor from "./UpdateDoctor";
import ReviewDoctor from "./ReviewDoctor";

function DoctorInList({ doctor, setDoctors }) {
	// console.log(doctor);
	const [isUpdateSeen, setIsUpdateSeen] = useState(false);
	const [isReviewSeen, setIsReviewSeen] = useState(false);
	const [reviews, setReviews] = useState(null);
	doctor.count = doctor.count || 0;
	const [count, setCount] = useState(Number(doctor.count));
	doctor.average_rating = doctor.average_rating || 0;
	const [averageRating, setAverageRating] = useState(
		Number(doctor.average_rating)
	);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await DoctorFinder.get(`/${doctor.id}`);
				setReviews(response.data.data.reviews);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	const handleDelete = async (e, id) => {
		e.stopPropagation();
		try {
			await DoctorFinder.delete(`/${id}`);
			setDoctors((prevDoctors) =>
				prevDoctors.filter((doc) => {
					return doc.id !== id;
				})
			);
		} catch (err) {
			console.log(err);
		}
	};

	const handleUpdate = (e) => {
		e.stopPropagation();
		setIsUpdateSeen(true);
	};

	const handleDoctorSelect = (e) => {
		setIsReviewSeen(true);
	};
	console.log("individual rendered");

	return (
		reviews && (
			<tr
				id={doctor.id}
				style={{ cursor: "pointer" }}
				onClick={(e) => handleDoctorSelect(e)}
				key={doctor.id}
			>
				{console.log("reviews in return")}
				{console.log(reviews)}
				<ReviewDoctor
					isReviewSeen={isReviewSeen}
					setIsReviewSeen={setIsReviewSeen}
					doctor={doctor}
					reviews={reviews}
					setReviews={setReviews}
					count={count}
					setCount={setCount}
					averageRating={averageRating}
					setAverageRating={setAverageRating}
				/>

				<td>{doctor.name}</td>
				<td>{doctor.company}</td>
				<td>{"$".repeat(doctor.price_range)}</td>
				<td>
					<Ratings count={count} averageRating={averageRating} />
				</td>
				<td>
					<button onClick={(e) => handleUpdate(e)} className="btn btn-warning">
						Update
					</button>

					<UpdateDoctor
						isUpdateSeen={isUpdateSeen}
						setIsUpdateSeen={setIsUpdateSeen}
						doctor={doctor}
					/>
				</td>
				<td>
					<button
						onClick={(e) => handleDelete(e, doctor.id)}
						className="btn btn-danger"
					>
						Delete
					</button>
				</td>
			</tr>
		)
	);
}

export default DoctorInList;
