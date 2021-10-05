import React, { useEffect, useContext, useState, useRef } from "react";
import DoctorFinder from "../apis/DoctorFinder";
import { DoctorsContext } from "../context/DoctorsContext";
import DoctorInList from "./DoctorInList";
// import useDoctors from "../hooks/useDoctors";
const DoctorList = () => {
	const { doctors, setDoctors } = useContext(DoctorsContext);
	const [offset, setOffset] = useState(0);
	// const [isLoading, setIsLoading] = useState(false);
	const isLoading = useRef(false);
	console.log("doctor list rendered");
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		if (!isLoading.current) {
			const fetchData = async () => {
				isLoading.current = true; //?
				try {
					const response = await DoctorFinder.get(`/name/${offset}/ASC`);
					if (response.data.results !== 0) {
						if (response.data.results < 50) {
							setDoctors((prevDoctors) => [
								...prevDoctors,
								...response.data.data.doctors,
							]);
						} else {
							setDoctors(response.data.data.doctors); //?
						}
					}
					isLoading.current = false; //?
				} catch (err) {}
			};
			fetchData();
		}
		return () => window.removeEventListener("scroll", handleScroll);
	}, [offset]);

	const handleScroll = () => {
		if (
			document.documentElement.scrollTop >
				document.documentElement.scrollHeight - 1000 &&
			!isLoading.current
		) {
			console.log("offset");
			console.log(offset);

			console.log("scroll down");
			setOffset((prev) => prev + 20);
		} else if (
			document.documentElement.scrollTop < 1000 &&
			!isLoading.current &&
			offset > 20
		) {
			console.log("offset");
			console.log(offset);
			console.log("scroll up");
			setOffset((prev) => prev - 20);
		}
	};

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
					{doctors.map((doctor) => {
						return <DoctorInList key={doctor.id} doctor={doctor} />;
					})}
				</tbody>
			</table>
		</div>
	);
};

export default DoctorList;