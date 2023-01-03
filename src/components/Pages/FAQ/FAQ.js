import React from "react";

const FAQ = () => {
  return (
    <section className="bg-gray-100 text-gray-800 text-left">
      <div className="w-4/5 flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 text-gray-600">
          Sagittis tempor donec id vestibulum viverra. Neque condimentum primis
          orci at lacus amet bibendum.
        </p>
        <div className="space-y-4 text-xl">
          <details className="w-full border rounded-lg bg-indigo-400 text-white">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-600">
              Ex orci laoreet egestas sapien magna egestas scelerisque?
            </summary>
            <p className="px-4 py-6 pt-4 -mt-4 text-gray-600 bg-rose-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg bg-indigo-400 text-white">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-600">
              Ex orci laoreet egestas sapien magna egestas scelerisque?
            </summary>
            <p className="px-4 py-6 pt-4 -mt-4 text-gray-600 bg-rose-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg bg-indigo-400 text-white">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-600">
              Ex orci laoreet egestas sapien magna egestas scelerisque?
            </summary>
            <p className="px-4 py-6 pt-4 -mt-4 text-gray-600 bg-rose-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg bg-indigo-400 text-white">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-600">
              Ex orci laoreet egestas sapien magna egestas scelerisque?
            </summary>
            <p className="px-4 py-6 pt-4 -mt-4 text-gray-600 bg-rose-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
