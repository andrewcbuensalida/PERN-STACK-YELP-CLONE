import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import { DoctorsContextProvider } from "./context/DoctorsContext";
const App = () => {
	return (
		<DoctorsContextProvider>
			<div className="container">
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</Router>
			</div>
		</DoctorsContextProvider>
	);
};

export default App;
