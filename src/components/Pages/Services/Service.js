import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, serviceName, serviceImage, serviceDescription, servicePrice } =
    service;
  console.log(service);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl text-left">
      <PhotoProvider>
        <PhotoView src={serviceImage}>
          <figure>
            <img src={serviceImage} className="h-full" alt="Album" />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body bg-sky-300 rounded-tr-2xl rounded-br-2xl">
        <h2 className="card-title">{serviceName}</h2>
        <div className="space-y-2">
          <Link className="block">
            <h3 className="text-xl font-semibold text-orange-600">
              Consultation Fee : BDT {servicePrice}
            </h3>
          </Link>
          <p className="leading-snug text-gray-600">
            {serviceDescription.split("", 150)}
          </p>
        </div>
        <Link to={`/service/${id}`}>
          <button className="btn btn-primary">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
