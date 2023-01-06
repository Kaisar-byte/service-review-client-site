import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import FAQ from "../../Pages/FAQ/FAQ";
import Feature from "../../Pages/Feature/Feature";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import Home from "../../Pages/SharedPages/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/services",
				element: <Services></Services>,
			},
			{
				path: "/servicedetails/:id",
				element: <ServiceDetails></ServiceDetails>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/services/${params.id}`),
			},
			{
				path: "/faq",
				element: <FAQ></FAQ>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/signup",
				element: <SignUp></SignUp>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/feature",
				element: <Feature></Feature>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/services/${params.id}`),
			},
			{
				path: "/addreview",
				element: <Review></Review>,
			},
		],
	},
]);
