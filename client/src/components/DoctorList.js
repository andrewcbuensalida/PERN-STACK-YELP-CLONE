import React, { useEffect, useContext, useState, useRef } from "react";
import DoctorFinder from "../apis/DoctorFinder";
import { DoctorsContext } from "../context/DoctorsContext";
import DoctorInList from "./DoctorInList";
// import useDoctors from "../hooks/useDoctors";
const DoctorList = () => {
	const { doctors, setDoctors } = useContext(DoctorsContext);
	const isLoading = useRef(false);
	const offset = useRef(0);
	console.log("doctor list rendered");

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		fetchDoctors();
		// return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		if (
			document.documentElement.scrollTop >
				document.documentElement.scrollHeight - 1500 &&
			!isLoading.current
		) {
			fetchDoctors();
		}
	};

	const fetchDoctors = async () => {
		isLoading.current = true; //?
		try {
			const response = await DoctorFinder.get(
				`/name/${offset.current}/ASC`
			);
			if (response.data.results !== 0) {
				isLoading.current = false;
				setDoctors((prevDoctors) => [
					...prevDoctors,
					...response.data.data.doctors,
				]);
			}
			// isLoading.current = false; //?
			offset.current += 40;
		} catch (err) {}
	};

	return (
		<div className="list-group">
			<table className="table table-hover table-dark table-striped table-sm table-borderless ">
				<tr className="bg-info row no-gutters pl-5 ">
					<th scope="col" class="col-md-2 col-sm-4 ">
						Doctor
					</th>
					<th scope="col" class="col-md-2 col-sm-4 ">
						Company
					</th>
					<th scope="col" class="col-md-2 col-sm-4 ">
						Price
					</th>
					<th scope="col" class="col-md-2 col-sm-4 ">
						Rating
					</th>
					<th scope="col" class="col-md-2 col-sm-4 ">
						Edit info
					</th>
					<th scope="col" class="col-md-2 col-sm-4 ">
						Delete
					</th>
				</tr>

				<tbody>
					{doctors.map((doctor) => {
						return (
							<DoctorInList
								key={doctor.id}
								doctor={doctor}
								setDoctors={setDoctors}
							/>
						);
					})}
				</tbody>
			</table>
			{/* {!isLoading.current}
			{!isLoading.current && (
				<div style={{ position: "fixed", bottom: "20px" }}>
					<h3>Scroll Down</h3>
				</div>
			)} */}
		</div>
	);
};

export default DoctorList;
