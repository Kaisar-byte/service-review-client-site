import React from "react";

const FAQ = () => {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 text-gray-600">
          A simple guideline for the person not understanding about the order
          procedure
        </p>
        <div className="space-y-4">
          <details
            className="w-full border rounded-lg hover:bg-green-300"
            open=""
          >
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-600">
              How to order your service?
            </summary>
            <p className="px-4 py-6 pt-4 -mt-4 bg-blue-400 text-gray-600">
              To order a service please go to order tab for an appointment and
              then give your details.{" "}
            </p>
          </details>
        </div>
        <div className="space-y-4">
          <details
            className="w-full border rounded-lg hover:bg-green-300"
            open=""
          >
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-600">
              How do I know about your latest service offering by you
            </summary>
            <p className="px-4 py-6 pt-4 -mt-4 bg-blue-400 text-gray-600">
              If you want to know about my latest dental service please visit my
              blog.{" "}
            </p>
          </details>
        </div>
        <div className="space-y-4">
          <details
            className="w-full border rounded-lg hover:bg-green-300"
            open=""
          >
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-600">
              How do I contact with you
            </summary>
            <p className="px-4 py-6 pt-4 -mt-4 bg-blue-400 text-gray-600">
              Visit our contact us page and give your details and forward a
              ticket to me .{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
