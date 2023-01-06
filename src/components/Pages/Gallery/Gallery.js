import React from "react";

const Gallery = () => {
  return (
    <section className="py-6 bg-gray-100 text-gray-900">
      <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-gray-50">
        <h2 className="text-5xl font-bold text-gray-900">
          Our Richfull Gallery
        </h2>
        <p className="text-gray-600">
          Welcome you to visit out gallery fullfil with rich tools and
          equipment.
        </p>
      </div>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://media.istockphoto.com/id/1370904034/photo/medical-dentist-team-working-in-the-dental-clinic.jpg?b=1&s=170667a&w=0&k=20&c=octz3BblOFK6f5dcsWmwpUjNKLd_mgMjszKZ4InMjfM="
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://media.istockphoto.com/id/639584498/photo/female-dentist-is-working.jpg?b=1&s=170667a&w=0&k=20&c=dUOs3LP2l8Uv7cFpOXs3RhM2G3VXzBvVfs6N7bAyovM="
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://media.istockphoto.com/id/1421087007/photo/dentist-sets-out-to-examine-the-mouth-of-a-70-year-old-woman.jpg?b=1&s=170667a&w=0&k=20&c=elchdNza040nf4enX8cIy1xweSzHtyws6nBX63QrMxE="
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://media.istockphoto.com/id/1170755336/photo/the-doctor-shows-the-model-of-a-healthy-tooth.jpg?b=1&s=170667a&w=0&k=20&c=_Y7X50CrJmeJWhpFcnXUrnRuETnN4-tSzMtwvtRfsLI="
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://media.istockphoto.com/id/810200600/photo/dentist-patient-showing-perfect-smile-after-treatment.jpg?b=1&s=170667a&w=0&k=20&c=9EVIJO6U5bW3UdZbArTsnqSOh38V6uDjxZQmPSb97uo="
        />
      </div>
    </section>
  );
};

export default Gallery;
