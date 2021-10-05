require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());

// Get all doctors
app.get("/api/v1/doctors/:orderby/:offset/:ascdesc", async (req, res) => {
	try {
		//const results = await db.query("select * from doctors");
		const doctorRatingsData = await db.query(
			"SELECT * FROM doctors LEFT JOIN (SELECT doctor_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating FROM reviews GROUP BY doctor_id) reviews ON doctors.id = reviews.doctor_id ORDER BY name OFFSET $1 LIMIT 40 ;",
			[req.params.offset]
		);
		res.status(200).json({
			status: "success",
			results: doctorRatingsData.rows.length,
			data: {
				doctors: doctorRatingsData.rows,
			},
		});
	} catch (err) {
		console.log(err);
	}
});

//Get a doctor
app.get("/api/v1/doctors/:id", async (req, res) => {
	try {
		const doctor = await db.query(
			"select * from doctors left join (select doctor_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by doctor_id) reviews on doctors.id = reviews.doctor_id where id = $1",
			[req.params.id]
		);
		// select * from doctors wehre id = req.params.id

		const reviews = await db.query(
			"select * from reviews where doctor_id = $1",
			[req.params.id]
		);
		res.status(200).json({
			status: "succes",
			data: {
				doctor: doctor.rows[0],
				reviews: reviews.rows,
			},
		});
	} catch (err) {
		console.log(err);
	}
});

// Create a doctor

app.post("/api/v1/doctors", async (req, res) => {
	try {
		const results = await db.query(
			"INSERT INTO doctors (name, company, price_range) values ($1, $2, $3) returning *",
			[req.body.name, req.body.company, req.body.price_range]
		);
		res.status(201).json({
			status: "succes",
			data: {
				doctor: results.rows[0],
			},
		});
	} catch (err) {
		console.log(err);
	}
});

// Update doctors

app.put("/api/v1/doctors/:id", async (req, res) => {
	try {
		const results = await db.query(
			"UPDATE doctors SET name = $1, company = $2, price_range = $3 where id = $4 returning *",
			[req.body.name, req.body.company, req.body.price_range, req.params.id]
		);

		res.status(200).json({
			status: "succes",
			data: {
				doctor: results.rows[0],
			},
		});
	} catch (err) {
		console.log(err);
	}
});

// Delete doctor

app.delete("/api/v1/doctors/:id", async (req, res) => {
	try {
		db.query("DELETE FROM reviews WHERE doctor_id = $1", [req.params.id]);
		db.query("DELETE FROM doctors where id = $1", [req.params.id]);
		res.status(204).json({
			status: "sucess",
		});
	} catch (err) {
		console.log(err);
	}
});

app.post("/api/v1/doctors/:id/addReview", async (req, res) => {
	try {
		const newReview = await db.query(
			"INSERT INTO reviews (doctor_id, name, review, rating) values ($1, $2, $3, $4) returning *;",
			[req.params.id, req.body.name, req.body.review, req.body.rating]
		);
		res.status(201).json({
			status: "success",
			data: {
				review: newReview.rows[0],
			},
		});
	} catch (err) {
		console.log(err);
	}
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`server is up and listening on port ${port}`);
});
