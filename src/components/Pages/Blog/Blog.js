import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div className="mx-10 my-12 ">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Jun 1, 2020</span>
            <Link className="px-2 py-1 font-bold rounded bg-green-600 text-gray-50">
              Database
            </Link>
          </div>
          <div className="mt-3">
            <Link className="text-2xl text-blue-700 font-bold hover:underline">
              What is the difference between NoSQL and MySQL?
            </Link>
            <p className="mt-2 text-justify">
              Difference between sql and nosql MySQL is a relational database
              that is based on tabular design whereas NoSQL is non-relational in
              nature with its document-based design. MySQL has established a
              database, covering huge IT market whereas NoSQL databases are the
              latest arrival, hence still gaining popularity among big IT
              giants.facile occurrere. Loco visa to du huic at in dixi aër.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-10 my-12 text-gray-800 ">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Jun 1, 2020</span>
            <Link className="px-2 py-1 font-bold rounded bg-green-600 text-gray-50">
              JWT
            </Link>
          </div>
          <div className="mt-3">
            <Link className="text-2xl text-blue-700 font-bold hover:underline">
              What is JWT, and how does it work?
            </Link>
            <p className="mt-2 text-justify">
              JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
              compact and self-contained way for securely transmitting
              information between parties as a JSON object. This information can
              be verified and trusted because it is digitally signed.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-10 my-12 text-gray-800 ">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Jun 1, 2020</span>
            <Link className="px-2 py-1 font-bold rounded bg-green-600 text-gray-50">
              Javascript
            </Link>
          </div>
          <div className="mt-3">
            <Link className="text-2xl text-blue-700 font-bold hover:underline">
              What is the difference between javascript and NodeJS?
            </Link>
            <p className="mt-2 text-justify">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node.js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language. It requires libraries that can be
              conveniently accessed from JavaScript programming to be more
              helpful.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-10 my-12 text-gray-800 ">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Jun 1, 2020</span>
            <Link className="px-2 py-1 font-bold rounded bg-green-600 text-gray-50">
              NodeJS
            </Link>
          </div>
          <div className="mt-3">
            <Link className="text-2xl text-blue-700 font-bold hover:underline">
              How does NodeJS handle multiple requests at the same time?
            </Link>
            <p className="mt-2 text-justify">
              How NodeJS handle multiple client requests? NodeJS receives
              multiple client requests and places them into EventQueue. NodeJS
              is built with the concept of event-driven architecture. NodeJS has
              its own EventLoop which is an infinite loop that receives requests
              and processes them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
