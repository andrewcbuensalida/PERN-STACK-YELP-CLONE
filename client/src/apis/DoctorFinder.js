import axios from "axios";

const baseURL =
	process.env.NODE_ENV === "production"
		? "/api/v1/doctors"
		: "http://localhost/api/v1/doctors";

export default axios.create({
	baseURL: baseURL,
});
