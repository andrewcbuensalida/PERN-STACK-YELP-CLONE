import React, { useEffect, useContext, useState, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import DoctorFinder from "../apis/DoctorFinder";
import { DoctorsContext } from "../context/DoctorsContext";
import DoctorInList from "./DoctorInList";
// import useDoctors from "../hooks/useDoctors";
const DoctorList = () => {
	const { doctors, setDoctors } = useContext(DoctorsContext);
	const offset = useRef(0);
	console.log("doctor list rendered");
	const [count, setCount] = useState({ prev: 0, next: 10 });
	const [hasMore, setHasMore] = useState(true);
	const [current, setCurrent] = useState(doctors.slice(count.prev, count.next));

	useEffect(() => {
		fetchDoctors();
	}, [doctors]);

	const getMoreData = () => {
		if (current.length === doctors.length) {
			setHasMore(false);
			return;
		}

		setCurrent(current.concat(doctors.slice(count.prev + 10, count.next + 10)));

		setCount((prevState) => ({
			prev: prevState.prev + 10,
			next: prevState.next + 10,
		}));
	};

	const fetchDoctors = async () => {
		try {
			const response = await DoctorFinder.get(`/name/${offset.current}/ASC`);
			setDoctors((prevDoctors) => {
				return [...prevDoctors, ...response.data.data.doctors];
			});
			setCurrent(doctors.slice(count.prev, count.next));
		} catch (err) {}
		// } finally {
		// 	setCurrent(doctors.slice(count.prev, count.next));
		// }
	};

	console.log("This is current");
	console.log(current);
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
					{" "}
					<InfiniteScroll
						dataLength={current.length}
						next={getMoreData}
						hasMore={hasMore}
						loader={<h4>Fetching...</h4>}
					>
						<div>
							{current &&
								current.map((doctor) => (
									<DoctorInList
										key={doctor.id}
										doctor={doctor}
										setDoctors={setDoctors}
									/>
								))}
						</div>
					</InfiniteScroll>
				</tbody>
			</table>
		</div>
	);
};

export default DoctorList;
