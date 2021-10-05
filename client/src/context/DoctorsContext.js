import React, { useState, createContext } from "react";
export const DoctorsContext = createContext();

export const DoctorsContextProvider = (props) => {
	const [doctors, setDoctors] = useState([]);

	const addDoctors = (doctor) => {
		setDoctors([doctor, ...doctors]);
	};
	return (
		<DoctorsContext.Provider
			value={{
				doctors,
				setDoctors,
				addDoctors,
			}}
		>
			{props.children}
		</DoctorsContext.Provider>
	);
};
