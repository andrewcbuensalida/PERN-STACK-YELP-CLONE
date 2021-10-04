import React, { useEffect, useContext, useState, useRef } from "react";
import DoctorFinder from "../apis/DoctorFinder";
import { DoctorsContext } from "../context/DoctorsContext";
import DoctorInList from "./DoctorInList";
import useDoctors from "../hooks/useDoctors";
const DoctorList = () => {
	const { doctors } = useContext(DoctorsContext);
	const [offset, setOffset] = useState(0);
	const isLoading = useRef(false);
	// console.log("doctor list rendered");
	// console.log("this is offset");
	// console.log(offset);
	// useDoctors(offset);
	// console.log("window.location.hash");
	// console.log(window.location.hash);
	// console.log("window.location.hash.substring(1)");
	// console.log(window.location.hash.substr(1));
	// function handleGoToHash() {
	// 	window.location.hash = window.location.hash.substr(1);
	// }
	// window.location.hash = 758;
	useDoctors(offset);

	// useEffect(() => {
	// 	window.addEventListener("scroll", handleScroll);
	// 	if (!isLoading.current && !needsUpdating) {
	// 		isLoading.current = true;
	// 		const fetchData = async () => {
	// 			try {
	// 				const response = await DoctorFinder.get(`/name/${offset}/ASC`);
	// 				console.log("in useeffect if");
	// 				setDoctors((prev) => {
	// 					return [...prev, ...response.data.data.doctors];
	// 				});
	// 				isLoading.current = false;
	// 			} catch (err) {}
	// 		};
	// 		fetchData();
	// 	}
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, [offset]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await DoctorFinder.get(`/name/${offset}/ASC`);
	// 			console.log("in useeffect if");
	// 			setDoctors(() => {
	// 				return [...response.data.data.doctors];
	// 			});
	// 		} catch (err) {}
	// 	};
	// 	fetchData();
	// 	setNeedsUpdating(false);
	// }, [needsUpdating]);

	// const handleScroll = () => {
	// 	if (
	// 		document.documentElement.scrollTop >
	// 			document.documentElement.scrollHeight - 1000 &&
	// 		!isLoading.current
	// 	) {
	// 		setOffset((prev) => prev + 20);
	// 	}
	// };

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
