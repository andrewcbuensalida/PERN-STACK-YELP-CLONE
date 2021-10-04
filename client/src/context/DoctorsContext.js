import React, { useState, createContext } from "react";
export const DoctorsContext = createContext();

export const DoctorsContextProvider = (props) => {
	const [doctors, setDoctors] = useState([]);
	const [selectedDoctor, setSelectedDoctor] = useState(null);
	const [needsUpdating, setNeedsUpdating] = useState(false);

	const addDoctors = (doctor) => {
		setDoctors([doctor, ...doctors]);
	};
	return (
		<DoctorsContext.Provider
			value={{
				doctors,
				setDoctors,
				addDoctors,
				selectedDoctor,
				setSelectedDoctor,
				needsUpdating,
				setNeedsUpdating,
			}}
		>
			{props.children}
		</DoctorsContext.Provider>
	);
};
