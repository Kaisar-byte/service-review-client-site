import React from "react";

const AddService = () => {
	// const { _id, serviceName, serviceImage, serviceDescription, servicePrice } =
	// 	serviceCard;
	return (
		<div class="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
			<div class="bg-white py-6 px-10 sm:max-w-md w-full rounded-lg">
				<div class="flex flex-col space-y-8">
					<div>
						<h2 className="text-3xl bg-orange-400 rounded-md mt-8 py-2">
							Please add a service
						</h2>
					</div>
					<div className="pt-8">
						<input
							type="text"
							name="serviceName"
							class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
							placeholder="Name "
						/>
					</div>
					<div>
						<input
							type="text"
							name="serviceDescription"
							class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
							placeholder="Write description of your service"
						/>
					</div>
					<div>
						<input
							type="number"
							name="servicePrice"
							class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
							placeholder="Price of Your Service"
						/>
					</div>
					<div>
						<input
							type="text"
							name="serviceDescription"
							class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
							placeholder="Write description of your service"
						/>
					</div>
					<div class="flex justify-center my-6">
						<button class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold ">
							Add Service
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddService;
