import React, { useEffect, useContext, useState, useRef } from "react";
import DoctorFinder from "../apis/DoctorFinder";
import { DoctorsContext } from "../context/DoctorsContext";
import { useHistory } from "react-router-dom";
import Ratings from "./Ratings";

const DoctorList = () => {
	const { doctors, setDoctors, needsUpdating, setNeedsUpdating } =
		useContext(DoctorsContext);
	const [offset, setOffset] = useState(0);
	const isLoading = useRef(false);
	let history = useHistory();
	console.log("does it render?");

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		if (!isLoading.current && !needsUpdating) {
			isLoading.current = true;
			const fetchData = async () => {
				try {
					const response = await DoctorFinder.get(`/name/${offset}/ASC`);
					console.log("in useeffect if");
					setDoctors((prev) => {
						return [...prev, ...response.data.data.doctors];
					});
					isLoading.current = false;
				} catch (err) {}
			};
			fetchData();
		}
		return () => window.removeEventListener("scroll", handleScroll);
	}, [offset]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await DoctorFinder.get(`/name/${offset}/ASC`);
				console.log("in useeffect if");
				setDoctors(() => {
					return [...response.data.data.doctors];
				});
			} catch (err) {}
		};
		fetchData();
		setNeedsUpdating(false);
	}, [needsUpdating]);

	const handleScroll = () => {
		if (
			document.documentElement.scrollTop >
				document.documentElement.scrollHeight - 1000 &&
			!isLoading.current
		) {
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
