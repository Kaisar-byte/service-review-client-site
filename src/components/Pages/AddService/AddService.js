import React from "react";
import { Helmet } from "react-helmet";

const AddService = () => {
	const handleAddServiceBtn = (e) => {
		e.preventDefault();

		const form = e.target;
		const serviceName = form.serviceName.value;
		const servicePrice = form.servicePrice.value;
		const serviceDescription = form.serviceDescription.value;
		const serviceImage = form.serviceImage.value;
		const addService = {
			serviceName,
			servicePrice,
			serviceDescription,
			serviceImage,
		};
		console.log(addService);
	};
	return (
		<div className="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
			<Helmet></Helmet>
			<div className="bg-white py-6 px-10 sm:max-w-md w-full rounded-lg">
				<div className="flex flex-col gap-6">
					<div>
						<h2 className="text-3xl bg-orange-400 rounded-md mt-8 py-2">
							Please add a service
						</h2>
					</div>
					<form onSubmit={handleAddServiceBtn}>
						<div className="flex flex-col space-y-6">
							<input
								type="text"
								name="serviceName"
								className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
								placeholder="Enter Name of service provider "
							/>
							<input
								type="text"
								name="serviceImage"
								className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
								placeholder="Enter service Image URL"
							/>
							<input
								type="number"
								name="servicePrice"
								className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
								placeholder="Price of Your Service"
							/>
							<input
								type="text"
								name="serviceDescription"
								className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
								placeholder="Write description of your service"
							/>
						</div>
					</form>
					<div className="flex justify-center my-6">
						<button
							type="submit"
							className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold "
						>
							Add Service
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddService;
