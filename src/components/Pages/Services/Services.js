import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/services`)
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	const handleLoadMore = () => {
		fetch(`http://localhost:5000/services/seeall`, {
			method: "GET",
			headers: {
				"content-type": "application/json",
				body: JSON.stringify(),
			},
		})
			.then((res) => res.json())
			.then((data) => setServices(data));
	};
	return (
		<div className="">
			<div className="grid grid-cols-3 mx-14 gap-10 my-12 justify-items-center items-center align-middle">
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
