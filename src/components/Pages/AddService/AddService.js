import React from "react";

const AddService = () => {
	// const { _id, serviceName, serviceImage, serviceDescription, servicePrice } =
	// 	serviceCard;
	return (
		<div class="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
			<div class="bg-white py-6 px-10 sm:max-w-md w-full ">
				<div class="flex flex-col space-y-8">
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

					<div class="flex justify-center my-6">
						<button class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold ">
							Create Account
						</button>
					</div>
					<div class="flex justify-center ">
						<p class="text-gray-500">Already have an acount? </p>
						<a href="" class="text-sky-600 pl-2">
							{" "}
							Sign In
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddService;
