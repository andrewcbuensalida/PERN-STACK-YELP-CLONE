import React from "react";
import Header from "../components/Header";
import AddDoctor from "../components/AddDoctor";
import DoctorList from "../components/DoctorList";
import useDoctors from "../hooks/useDoctors";

const Home = () => {
	return (
		<div>
			<Header />
			<AddDoctor />
			<DoctorList />
		</div>
	);
};

export default Home;
