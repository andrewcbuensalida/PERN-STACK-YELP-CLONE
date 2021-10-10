import axios from "axios";

const baseURL =
	process.env.NODE_ENV === "production"
		? "api/v1/doctors"
		: "http://localhost:3001/api/v1/doctors";

console.log("This is process.env.NODE_ENV");
console.log(process.env.NODE_ENV);

export default axios.create({
	baseURL: baseURL,
});
