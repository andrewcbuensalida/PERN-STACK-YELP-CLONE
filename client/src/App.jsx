import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import DoctorDetailPage from "./routes/DoctorDetailPage";
import { DoctorsContextProvider } from "./context/DoctorsContext";
const App = () => {
	return (
		<DoctorsContextProvider>
			<div className="container">
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/doctors/:id/update" component={UpdatePage} />
						<Route exact path="/doctors/:id" component={DoctorDetailPage} />
					</Switch>
				</Router>
			</div>
		</DoctorsContextProvider>
	);
};

export default App;
