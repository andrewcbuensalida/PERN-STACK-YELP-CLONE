import React, { useState, useContext, useRef } from "react";
import DoctorFinder from "../apis/DoctorFinder";
import { DoctorsContext } from "../context/DoctorsContext";

const AddDoctor = () => {
	const { addDoctors } = useContext(DoctorsContext);
	const [name, setName] = useState("");
	const [company, setLocation] = useState("");
	const [priceRange, setPriceRange] = useState("Price Range");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await DoctorFinder.post("/", {
				name,
				company,
				price_range: priceRange,
			});
			console.log(response.data.data);
			addDoctors(response.data.data.doctor);
			setName("");
			setLocation("");
			setPriceRange("Price Range");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="mb-4">
			<form action="">
				<div className="form-row align-items-center">
					<div className="col">
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text"
							className="form-control"
							placeholder="name"
						/>
					</div>
					<div className="col">
						<input
							value={company}
							onChange={(e) => setLocation(e.target.value)}
							className="form-control"
							type="text"
							placeholder="Company"
						/>
					</div>
					<div className="col">
						<select
							value={priceRange}
							onChange={(e) => setPriceRange(e.target.value)}
							className="custom-select my-1 mr-sm-2"
						>
							<option disabled>Price Range</option>
							<option value="1">$</option>
							<option value="2">$$</option>
							<option value="3">$$$</option>
							<option value="4">$$$$</option>
							<option value="5">$$$$$</option>
						</select>
					</div>
					<button
						onClick={handleSubmit}
						type="submit"
						className="btn btn-primary"
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddDoctor;
