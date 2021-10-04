import React, { useContext } from "react";
import Ratings from "./Ratings";
import { DoctorsContext } from "../context/DoctorsContext";
import DoctorFinder from "../apis/DoctorFinder";
import { useHistory } from "react-router-dom";

function DoctorInList({ doctor }) {
	console.log("doctor rendered");
	const { setDoctors } = useContext(DoctorsContext);
	let history = useHistory();

	const handleDelete = async (e, id) => {
		e.stopPropagation();
		try {
			await DoctorFinder.delete(`/${id}`);
			setDoctors((prevDoctors) =>
				prevDoctors.filter((doctorFromContext) => {
					return doctorFromContext.id !== id;
				})
			);
		} catch (err) {
			console.log(err);
		}
	};

	const handleUpdate = (e, id, doctor) => {
		e.stopPropagation();
		history.push({
			pathname: `/doctors/${id}/update`,
			state: { doctor },
		});
	};

	const handleDoctorSelect = (id) => {
		history.push(`/doctors/${id}`);
	};

	return (
		<tr
			id={doctor.id}
			style={{ cursor: "pointer" }}
			onClick={() => handleDoctorSelect(doctor.id)}
			key={doctor.id}
		>
			<td>{doctor.name}</td>
			<td>{doctor.company}</td>
			<td>{"$".repeat(doctor.price_range)}</td>
			<td>
				<Ratings doctor={doctor} />
			</td>
			<td>
				<button
					onClick={(e) => handleUpdate(e, doctor.id, doctor)}
					className="btn btn-warning"
				>
					Update
				</button>
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
	);
}

export default DoctorInList;
