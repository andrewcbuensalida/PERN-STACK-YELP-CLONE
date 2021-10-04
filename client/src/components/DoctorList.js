import React, { useEffect, useContext, useState, useRef } from "react";
import DoctorFinder from "../apis/DoctorFinder";
import { DoctorsContext } from "../context/DoctorsContext";
import DoctorInList from "./DoctorInList";
// import useDoctors from "../hooks/useDoctors";
const DoctorList = () => {
	const { doctors } = useContext(DoctorsContext);
	const [offset, setOffset] = useState(0);
	const isLoading = useRef(false);
	console.log("doctor list rendered");
	// useDoctors(offset);
	// console.log("window.location.hash");
	// console.log(window.location.hash);
	// console.log("window.location.hash.substring(1)");
	// console.log(window.location.hash.substr(1));
	// function handleGoToHash() {
	// 	window.location.hash = window.location.hash.substr(1);
	// }
	// window.location.hash = 758;

	return (
		<div className="list-group">
			<table className="table table-hover table-dark">
				<thead>
					<tr className="bg-primary">
						<th scope="col">Doctor</th>
						<th scope="col">Company</th>
						<th scope="col">Price Range</th>
						<th scope="col">Ratings</th>
						<th scope="col">Edit</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{doctors.map((doctor) => (
						<DoctorInList key={doctor.id} doctor={doctor} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DoctorList;
