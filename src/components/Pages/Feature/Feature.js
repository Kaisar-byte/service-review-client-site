import React from "react";
import { Helmet } from "react-helmet";

const Feature = () => {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <Helmet>
        <title>Dentist Jishan-Feature page</title>
        <meta name="description" content="This Feature Page" />
        <meta name="keywords" content="Dental, Service, Doctor, Teeth" />
      </Helmet>
      <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-gray-50">
        <h2 className="text-5xl font-bold text-gray-900">
          CLIENT IS OUR WEALTH
        </h2>
        <p className="text-gray-600">
          I myself Jishan Ahmed welcome you to visit my personal website and get
          change to take dental service with satisfaction
        </p>
      </div>
      <img
        src="https://www.laserdentalbd.com/wp-content/uploads/2020/10/Dental-Clinic-in-Uttara.jpg"
        alt=""
        className="object-cover w-full rounded-md max-h-96 bg-gray-500"
      />
      <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-50">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LJaTp0HFRT2GHznf3n7iSAzu-z7och7Vc0GsJkTHWEk67OjQ0t0o6piSTpTv9sr7UI&usqp=CAU"
          alt=""
          className="object-cover w-20 h-20 rounded-full bg-gray-500"
        />
        <blockquote className="max-w-lg text-lg italic font-medium text-center">
          "A satisfied dental service provided me by Dentist Jishan"
        </blockquote>
        <div className="text-center text-gray-600">
          <p>Mohammad Noor</p>
          <p>CEO of Pacific Jeans</p>
        </div>
      </div>
    </section>
    // <section className="p-4 lg:p-8 bg-gray-100 text-gray-800">
    //   <div className="container mx-auto space-y-12">
    //     <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
    //       <img
    //         src="https://source.unsplash.com/640x480/?1"
    //         alt=""
    //         className="h-80 bg-gray-500 aspect-video"
    //       />
    //       <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
    //         <span className="text-xs uppercase text-gray-600">
    //           Join, it's free
    //         </span>
    //         <h3 className="text-3xl font-bold">
    //           We're not reinventing the wheel
    //         </h3>
    //         <p className="my-6 text-gray-600">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    //           aliquam possimus quas, error esse quos.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
    //       <img
    //         src="https://source.unsplash.com/640x480/?2"
    //         alt=""
    //         className="h-80 bg-gray-500 aspect-video"
    //       />
    //       <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
    //         <span className="text-xs uppercase text-gray-600">
    //           Join, it's free
    //         </span>
    //         <h3 className="text-3xl font-bold">
    //           We're not reinventing the wheel
    //         </h3>
    //         <p className="my-6 text-gray-600">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    //           aliquam possimus quas, error esse quos.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
    //       <img
    //         src="https://source.unsplash.com/640x480/?3"
    //         alt=""
    //         className="h-80 bg-gray-500 aspect-video"
    //       />
    //       <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
    //         <span className="text-xs uppercase text-gray-600">
    //           Join, it's free
    //         </span>
    //         <h3 className="text-3xl font-bold">
    //           We're not reinventing the wheel
    //         </h3>
    //         <p className="my-6 text-gray-600">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    //           aliquam possimus quas, error esse quos.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Feature;
