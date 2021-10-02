import React, { useEffect, useContext, useState, useRef } from "react";
import DoctorFinder from "../apis/DoctorFinder";
import { DoctorsContext } from "../context/DoctorsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";

const DoctorList = (props) => {
	const { doctors, setDoctors } = useContext(DoctorsContext);
	const [offset, setOffset] = useState(0);
	const isLoading = useRef(false);
	let history = useHistory();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		if (!isLoading.current) {
			isLoading.current = true;
			const fetchData = async () => {
				try {
					console.log("in the fetch");
					const response = await DoctorFinder.get(`/name/${offset}/ASC`);
					console.log("this is response.data.data.doctors");
					console.log(response.data.data.doctors);

					setDoctors((prev) => {
						console.log("prev");
						console.log(prev);
						console.log("spreaded");
						console.log([...prev]);
						console.log("response doctors in setdoctors");
						console.log(response.data.data.doctors);
						return [...prev, ...response.data.data.doctors];
					});
					console.log("after fetch");
					isLoading.current = false;
				} catch (err) {}
			};
			fetchData();
		}
		return () => window.removeEventListener("scroll", handleScroll);
	}, [offset]);

	console.log("hello");
	const handleScroll = () => {
		if (
			document.documentElement.scrollTop >
				document.documentElement.scrollHeight - 1000 &&
			!isLoading.current
		) {
			console.log("inside handlescroll");
			setOffset((prev) => prev + 20);
		}
	};

	const handleDelete = async (e, id) => {
		e.stopPropagation();
		try {
			const response = await DoctorFinder.delete(`/${id}`);
			setDoctors(
				doctors.filter((doctor) => {
					return doctor.id !== id;
				})
			);
		} catch (err) {
			console.log(err);
		}
	};

	const handleUpdate = (e, id) => {
		e.stopPropagation();
		history.push(`/doctors/${id}/update`);
	};

	const handleDoctorSelect = (id) => {
		history.push(`/doctors/${id}`);
	};

	const renderRating = (doctor) => {
		// console.log("this is doctor");
		// console.log(doctor);
		if (!doctor.count) {
			return <span className="text-warning">0 reviews</span>;
		}
		return (
			<>
				<StarRating rating={doctor.average_rating} />
				<span className="text-warning ml-1">({doctor.count})</span>
			</>
		);
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
					{doctors &&
						doctors.map((doctor) => {
							return (
								<tr
									style={{ cursor: "pointer" }}
									onClick={() => handleDoctorSelect(doctor.id)}
									key={doctor.id}
								>
									<td>{doctor.name}</td>
									<td>{doctor.company}</td>
									<td>{"$".repeat(doctor.price_range)}</td>
									<td>{renderRating(doctor)}</td>
									<td>
										<button
											onClick={(e) => handleUpdate(e, doctor.id)}
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
						})}
					{/* <tr>
            <td>mcdonalds</td>
            <td>New YOrk</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>mcdonalds</td>
            <td>New YOrk</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr> */}
				</tbody>
			</table>
		</div>
	);
};

export default DoctorList;
