import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import DoctorFinder from "../apis/DoctorFinder";

const UpdateDoctor = ({ isUpdateSeen, setIsUpdateSeen, doctor }) => {
	const [name, setName] = useState(doctor.name);
	const [company, setCompany] = useState(doctor.company);
	const [priceRange, setPriceRange] = useState(doctor.price_range);

	const handleSubmit = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		const updatedDoctor = await DoctorFinder.put(`/${doctor.id}`, {
			name,
			company,
			price_range: priceRange,
		});

		doctor.name = updatedDoctor.data.data.doctor.name;
		doctor.company = updatedDoctor.data.data.doctor.company;
		doctor.price_range = updatedDoctor.data.data.doctor.price_range;
		setIsUpdateSeen(false);
	};
	return (
		<div onClick={(e) => e.stopPropagation()}>
			<Modal
				show={isUpdateSeen}
				fullscreen={true}
				onHide={(e) => {
					// e.stopPropagation();
					setIsUpdateSeen(false);
				}}
			>
				<Modal.Header>
					<Modal.Title>Update Doctor</Modal.Title>
					<button
						onClick={(e) => {
							e.stopPropagation();
							setIsUpdateSeen(false);
						}}
						type="button"
						className="close"
						data-dismiss="modal"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</Modal.Header>
				<Modal.Body>
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
								onChange={(e) => setCompany(e.target.value)}
								id="company"
								className="form-control"
								type="text"
							/>
						</div>

						<div className="form-group col-4">
							<label htmlFor="rating">Price Range</label>
							<select
								value={priceRange}
								onChange={(e) => setPriceRange(e.target.value)}
								id="price_range"
								className="custom-select"
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
							type="submit"
							onClick={handleSubmit}
							className="btn btn-primary"
						>
							Submit
						</button>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default UpdateDoctor;
