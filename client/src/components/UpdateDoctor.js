import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import DoctorFinder from "../apis/DoctorFinder";

const UpdateDoctor = (props) => {
	const { id } = useParams();
	let history = useHistory();
	const [name, setName] = useState("");
	const [company, setLocation] = useState("");
	const [priceRange, setPriceRange] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const response = await DoctorFinder.get(`/${id}`);
			setName(response.data.data.doctor.name);
			setLocation(response.data.data.doctor.company);
			setPriceRange(response.data.data.doctor.price_range);
		};

		fetchData();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedDoctor = await DoctorFinder.put(`/${id}`, {
			name,
			company,
			price_range: priceRange,
		});

		history.location.state.doctor.name = updatedDoctor.data.data.doctor.name;
		history.location.state.doctor.company =
			updatedDoctor.data.data.doctor.company;
		history.location.state.doctor.price_range =
			updatedDoctor.data.data.doctor.price_range;
		history.push(`/#${id}`);
	};
	return (
		<div>
			<form action="">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						id="name"
						className="form-control"
						type="text"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="company">Company</label>
					<input
						value={company}
						onChange={(e) => setLocation(e.target.value)}
						id="company"
						className="form-control"
						type="text"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="price_range">Price Range</label>
					<input
						value={priceRange}
						onChange={(e) => setPriceRange(e.target.value)}
						id="price_range"
						className="form-control"
						type="number"
					/>
				</div>
				<button
					type="submit"
					onClick={handleSubmit}
					className="btn btn-primary"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default UpdateDoctor;
