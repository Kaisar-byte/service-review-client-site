import { Helmet } from "react-helmet";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/Router/Routes/Routes";

function App() {
	return (
		<div className="App">
			<Helmet>
				<title>Dentist Jishan</title>
				<meta name="description" content="A private dental service" />
				<meta name="keywords" content="Dental, Service, Doctor, Teeth" />
			</Helmet>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
