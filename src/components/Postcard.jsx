import React from "react";
import appwiteService from "../appwrite/conf";
import { Link } from "react-router-dom";

function Postcard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="w-full">
      <div className="flex flex-col w-full bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 transform hover:scale-105">
        <img
          src={appwiteService.getFilePreview(featuredImage)}
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="p-4 flex-grow">
          <h2 className="text-white text-xl font-bold truncate">{title}</h2>
          <p className="text-gray-400 text-sm mt-2">
            Vivamus vel massa id risus lacinia eleifend. Duis malesuada
            molestie dui at finibus. Nullam id nisi at nunc efficitur
            convallis vel eu risus.
          </p>
        </div>
        <div className="bg-gray-700 py-2 px-4 rounded-b-xl flex justify-between items-center">
          <Link
            to={`/post/${$id}`}
            className="text-blue-400 font-semibold hover:text-blue-500 hover:underline"
          >
            Read more &rarr;
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">Share:</span>
            <button className="text-gray-400 hover:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l3-3h4l3 3m0 0v4m0-4h-4m4 4V7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Postcard;
