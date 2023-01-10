import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <Carousel infiniteLoop={true} autoPlay={3000} showThumbs={false}>
        <div className="relative">
          <img
            className="h-screen"
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
          <div className="absolute top-0 banner">
            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
                Dentist Dishan
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
                Offering you a satisfactory dental service. Only one to one
                service will provide to you and fulfill your requirement with my
                experience and sincerity
              </p>
              <div className="flex flex-wrap justify-center">
                <Link to="/services">
                  <button className="btn btn-warning mr-4">Get Started</button>
                </Link>
                <Link to="/blog">
                  <button className="btn btn-outline btn-warning">
                    Visit Blog
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-screen"
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <div className="absolute top-0 banner">
            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
                Dentist Dishan
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
                Offering you a satisfactory dental service. Only one to one
                service will provide to you and fulfill your requirement with my
                experience and sincerity
              </p>
              <div className="flex flex-wrap justify-center">
                <Link to="/services">
                  <button className="btn btn-warning mr-4">Get Started</button>
                </Link>
                <Link to="/blog">
                  <button className="btn btn-outline btn-warning">
                    Visit Blog
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-screen"
            src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <div className="absolute top-0 banner">
            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
                Dentist Dishan
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
                Offering you a satisfactory dental service. Only one to one
                service will provide to you and fulfill your requirement with my
                experience and sincerity
              </p>
              <div className="flex flex-wrap justify-center">
                <Link to="/services">
                  <button className="btn btn-warning mr-4">Get Started</button>
                </Link>
                <Link to="/blog">
                  <button className="btn btn-outline btn-warning">
                    Visit Blog
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-screen"
            src="https://images.unsplash.com/photo-1593022356769-11f762e25ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <div className="absolute top-0 banner">
            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
                Dentist Dishan
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
                Offering you a satisfactory dental service. Only one to one
                service will provide to you and fulfill your requirement with my
                experience and sincerity
              </p>
              <div className="flex flex-wrap justify-center">
                <Link to="/services">
                  <button className="btn btn-warning mr-4">Get Started</button>
                </Link>
                <Link to="/blog">
                  <button className="btn btn-outline btn-warning">
                    Visit Blog
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
