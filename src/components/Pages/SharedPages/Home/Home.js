import React from "react";
import { Helmet } from "react-helmet";
import FAQ from "../../FAQ/FAQ";
import Feature from "../../Feature/Feature";
import Gallery from "../../Gallery/Gallery";

import Services from "../../Services/Services";
import Slider from "../../Slider/Slider";

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Dentist Jishan-Home page</title>
				<meta name="description" content="This Home Page" />
				<meta name="keywords" content="Dental, Service, Doctor, Teeth" />
			</Helmet>
			;
			<div>
				<Slider></Slider>
			</div>
			<div>
				<Services></Services>
			</div>
			<div></div>
			<div>
				<Gallery></Gallery>
			</div>
			<div>
				<Feature></Feature>
			</div>
		</div>
	);
};

export default Home;
