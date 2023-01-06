import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const ServiceDetails = () => {
	const { user } = useContext(AuthContext);

	const services = useLoaderData();
	const { _id, serviceName, serviceImage, serviceDescription, servicePrice } =
		services;

	const handleAddReview = (e) => {
		e.preventDefault();
		const form = e.target;
		const comment = form.comment.value;
		const reviewBox = {
			comment: comment,
			id: _id,
		};

		fetch(`http://localhost:5000/review`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(reviewBox),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					alert("you comment to this service");
					form.reset();
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<div className="flex sm: flex-col py-16 lg:py-0 lg:flex-col">
				<img
					className="sm:w-full sm:h-40 sm:mb-4 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 "
					src={serviceImage}
					alt=""
				/>
				<div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
					<div className="mb-0 pl-2">
						<h2 className="mb-5 pl-2 w-full text-center rounded-lg bg-blue-200 border-2 border-gray-400 py-4 text-blue-500 font-sans text-xl font-bold tracking-tight  sm:text-4xl sm:leading-none ">
							{serviceName}
						</h2>
						<h2 className="mb-5 pl-2 font-sans text-md text-orange-400 tracking-tight sm:text-2xl  md:text-left">
							Consultation Fee: BDT {servicePrice}
						</h2>
						<p className="mb-5 text-base text-gray-700 md:text-lg md:text-justify">
							{serviceDescription}
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 text-gray-800">
						<div className="flex flex-col items-center w-full">
							<h2 className="text-3xl font-semibold text-center">
								Give your review here
							</h2>
							<div className="flex flex-col justify-center items-center w-full">
								<form
									className="flex justify-center flex-col items-center"
									onSubmit={handleAddReview}
								>
									<textarea
										name="comment"
										rows="2"
										cols="36"
										placeholder="Message..."
										className="mb-4 mt-4 p-10 border-2 border-gray-600 rounded-md resize-none text-gray-800 bg-gray-50"
									></textarea>
									<button
										type="submit"
										className="py-2 px-4 font-semibold rounded-md text-gray-50 bg-green-600"
									>
										Add Comments
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr className="mx-4" />
		</div>
	);
};

export default ServiceDetails;
