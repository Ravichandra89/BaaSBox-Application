import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div>
        <div className="">
          <div className="">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <span className="py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">
                BaaSBox
              </span>
              {/* <span className="text-white">Blog</span> */}
              Tool
            </Link>
          </div>
          <div className="flex gap-7">
          <div className="mt-8">
            <h1 className="text-1xl font-bold">
              <span className="gradient-text-to-r">Quick Start</span>
            </h1>
            <ul className="grid gap-2 mt-2">
              <Link to="/">
                <li className="hover:text-red-600">Deployment</li>
              </Link>
              <Link to="/">
                <li className="hover:text-red-600">Plans</li>
              </Link>
            </ul>
          </div>

          {/* Product Section  */}
          <div className="mt-8">
            <h1 className="text-1xl font-bold">
              <span className="gradient-text-to-r">Product</span>
            </h1>
            <ul className="grid gap-2 mt-2">
              <Link to="/">
                <li className="hover:text-red-600">Auth</li>
              </Link>
              <Link to="/">
                <li className="hover:text-red-600">DataBase</li>
              </Link>
              <Link to="/">
                <li className="hover:text-red-600">Storage</li>
              </Link>
              <Link to="/">
                <li className="hover:text-red-600">Notification System</li>
              </Link>
              <Link to="/">
                <li className="hover:text-red-600">Machine Learning</li>
              </Link>
            </ul>
          </div>

          <div className="mt-8">
            <h1 className="text-1xl font-bold">
              <span className="gradient-text-to-r">About</span>
            </h1>
            <ul className="grid gap-2 mt-2">
              <Link to="/">
                <li className="hover:text-red-600">BaaSBox</li>
              </Link>
              <Link to="/">
                <li className="hover:text-red-600">Contact</li>
              </Link>
              <Link to="/">
                <li className="hover:text-red-600">About</li>
              </Link>
              <Link to="/">
                <li className="hover:text-red-600">Pricing</li>
              </Link>
              <Link to="/">
                <li className="hover:text-red-600"></li>
              </Link>

              
            </ul>
            
          </div>
          </div>

          <div>
            
          </div>

        </div>
      </div>
    </Footer>
  );
}
