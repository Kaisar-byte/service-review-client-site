import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Service from "./Service";

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/services`)
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	const handleLoadMore = () => {
		fetch(`http://localhost:5000/services/seeall`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setServices(data);
			});
	};
	return (
		<div className="flex flex-col justify-center items-center gap-6">
			<Helmet>
				<title>Dentist Jishan-Service page</title>
				<meta name="description" content="This Service Page" />
				<meta name="keywords" content="Dental, Service, Doctor, Teeth" />
			</Helmet>

			<div className="grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1  sm:w-full px-6 gap-14 my-8 justify-center items-center">
				{services.map((serviceCard) => (
					<Service key={serviceCard._id} serviceCard={serviceCard}></Service>
				))}
			</div>
			<button className="btn btn-success mx-4 mb-10" onClick={handleLoadMore}>
				See All
			</button>
		</div>
	);
};

export default Services;
