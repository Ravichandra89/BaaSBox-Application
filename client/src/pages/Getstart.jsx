import React from "react";
import { Link } from "react-router-dom";

export default function Getstart() {
  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold flex justify-center mt-5">
          Pricing Plan
        </h1>
        <p className="text-1xl flex justify-center text-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sint.
        </p>
      </div>
      <div className="flex justify-center mt-5 flex-wrap">
        {/* Card One */}
        <div className="w-full sm:w-80 bg-gray-900 rounded-lg overflow-hidden shadow-lg m-4">
          <div className="p-4 text-white">
            <h2 className="text-xl font-semibold mb-2">Free Plan</h2>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <h1 className="text-lg">Features</h1>
            <ul>
              <li>➡️ 5GB Bandwidth</li>
              <li>➡️ 2GB Storage</li>
              <li>➡️ 10k Monthly Users</li>
              <li>➡️ 1 Database, 3 buckets</li>
              <li>➡️ Load Balancing</li>
              <li>➡️ AutoScaling</li>
            </ul>
            <div className="flex items-center justify-between mb-4">
              <span className="text-indigo-700 text-1xl font-bold mt-3">
                Price:
              </span>
              <span className="text-indigo-600 font-semibold mt-3">
                $0/month
              </span>
            </div>
            <Link to="/sign-in">
              <button className=" w-[100%] bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Start Building
              </button>
            </Link>
          </div>
        </div>

        {/* Card Two */}
        <div className="w-full sm:w-80 bg-gray-900 rounded-lg overflow-hidden shadow-lg m-4">
          <div className="p-4 text-white">
            <h2 className="text-xl font-semibold mb-2">Medium Plan</h2>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <h1 className="text-lg">Features</h1>
            <ul>
              <li>➡️ 300GB Bandwidth</li>
              <li>➡️ 200GB Storage</li>
              <li>➡️ 200k Monthly Users</li>
              <li>➡️ Unlimited Databases, buckets</li>
              <li>➡️ Load Balancing</li>
              <li>➡️ AutoScaling</li>
            </ul>
            <div className="flex items-center justify-between mb-4">
              <span className="text-indigo-700 text-1xl font-bold mt-3">
                Price:
              </span>
              <span className="text-indigo-600 font-semibold mt-3">
                $15/month
              </span>
            </div>
            <Link to="/sign-in">
              <button className=" w-[100%] bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Start Building
              </button>
            </Link>
          </div>
        </div>

        {/* Card Three */}
        <div className="w-full sm:w-80 bg-gray-900 rounded-lg overflow-hidden shadow-lg m-4">
          <div className="p-4 text-white">
            <h2 className="text-xl font-semibold mb-2">Pro Plan</h2>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <h1 className="text-lg">Features</h1>
            <ul>
              <li>➡️ 5TB Bandwidth</li>
              <li>➡️ 500GB Storage</li>
              <li>➡️ 500k Monthly Users</li>
              <li>➡️ Replication</li>
              <li>➡️ CDN, Buckets, Databases</li>
              <li>➡️ Additional Support</li>
            </ul>
            <div className="flex items-center justify-between mb-4">
              <span className="text-indigo-700 text-1xl font-bold mt-3">
                Price:
              </span>
              <span className="text-indigo-600 font-semibold mt-3">
                $200/month
              </span>
            </div>
            <Link to="/sign-in">
              <button className=" w-[100%] bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Coming Soon
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[100px]"></div>
    </div>
  );
}
