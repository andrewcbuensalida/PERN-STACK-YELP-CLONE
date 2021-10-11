import axios from "axios";

const baseURL =
	process.env.NODE_ENV === "production"
		? "/doctordb/api/v1/doctors"
		: "18.144.56.242/doctordb/api/v1/doctors";

export default axios.create({
	baseURL: baseURL,
});
