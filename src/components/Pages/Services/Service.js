import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Service = ({ serviceCard }) => {
  const { _id, serviceName, serviceImage, serviceDescription, servicePrice } =
    serviceCard;

  return (
    <div className="max-w-2xl rounded-md shadow-md bg-gray-50 text-gray-800">
      <PhotoProvider>
        <PhotoView src={serviceImage}>
          <img
            src={serviceImage}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
        </PhotoView>
      </PhotoProvider>

      <div className="flex flex-col justify-between bg-sky-300 p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {serviceName}
          </h2>
          <p className="font-semibold text-green-700 text-lg">
            Fee: {servicePrice}
          </p>
          <p className="text-gray-800 text-justify">
            {serviceDescription.split("", 150)}
          </p>
        </div>
        <Link className="mt-4" to={`/servicedetails/${_id}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-600 text-gray-50"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
