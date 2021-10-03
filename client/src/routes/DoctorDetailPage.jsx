import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DoctorsContext } from "../context/DoctorsContext";
import DoctorFinder from "../apis/DoctorFinder";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

const DoctorDetailPage = () => {
	const { id } = useParams();
	const { selectedDoctor, setSelectedDoctor } = useContext(DoctorsContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await DoctorFinder.get(`/${id}`);
				console.log("response");
				console.log(response);
				setSelectedDoctor(response.data.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);
	return (
		<div>
			{selectedDoctor && (
				<>
					<h1 className="text-center display-1">
						{selectedDoctor.doctor.name}
					</h1>
					<div className="text-center">
						<StarRating rating={selectedDoctor.doctor.average_rating} />
						<span className="text-warning ml-1">
							{selectedDoctor.doctor.count
								? `(${selectedDoctor.doctor.count})`
								: "(0)"}
						</span>
					</div>
					<div className="mt-3">
						<Reviews reviews={selectedDoctor.reviews} />
					</div>
					<AddReview
						setSelectedDoctor={setSelectedDoctor}
						selectedDoctor={selectedDoctor}
					/>
				</>
			)}
		</div>
	);
};

export default DoctorDetailPage;
