import React from "react";
import FAQ from "../../FAQ/FAQ";
import Feature from "../../Feature/Feature";
import Gallery from "../../Gallery/Gallery";

import Services from "../../Services/Services";
import Slider from "../../Slider/Slider";

const Home = () => {
	return (
		<div>
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
