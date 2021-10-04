import { useEffect, useContext } from "react";
import DoctorFinder from "../apis/DoctorFinder";
import { DoctorsContext } from "../context/DoctorsContext";

const useDoctors = (offset) => {
	const { setDoctors } = useContext(DoctorsContext);
	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log("fetched doctors");
				const response = await DoctorFinder.get(`/name/${offset}/ASC`);
				setDoctors(response.data.data.doctors);
			} catch (err) {}
		};
		fetchData();
	}, []);
};

export default useDoctors;
