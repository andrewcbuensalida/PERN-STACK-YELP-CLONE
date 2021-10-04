import React from "react";
import Header from "../components/Header";
import AddDoctor from "../components/AddDoctor";
import DoctorList from "../components/DoctorList";
import useDoctors from "../hooks/useDoctors";

const Home = () => {
	useDoctors(0);
	return (
		<div>
			<Header />
			<AddDoctor />
			<DoctorList />
		</div>
	);
};

export default Home;
