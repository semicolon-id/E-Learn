import React from "react";

import Man1 from "../../../assets/components/Landing-Page/Expert-Agent/man1.jpg";
import Wmn1 from "../../../assets/components/Landing-Page/Expert-Agent/wmn1.jpg";
import Wmn2 from "../../../assets/components/Landing-Page/Expert-Agent/wmn2.jpg";

function EA() {
  return (
    <div className="bg-gray-300 font-sans pb-7">
      <div className="pl-[5%] pr-[5%]">
        <div className="md:hidden">
          <div className="flex mb-2 justify-center">
            <div className="bg-blue-600 w-3 h-[2px] my-auto " />
            <p className="ml-2 font-medium">Expert Agents</p>
          </div>

          <div className="text-center mt-3 mb-7">
            <span className="text-4xl font-semibold">
              Your <span className="text-blue-600">Expert Guides</span> in Real
              Estate
            </span>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="">
            <div className="flex mb-2 ">
              <div className="bg-blue-600 w-3 h-[2px] my-auto " />
              <p className="ml-2 font-medium">Expert Tutors</p>
            </div>

            <div className="  mt-3 mb-7">
              <span className="text-4xl font-semibold text-blue-600">
                Your E-Learning Expert:
              </span>
              <div className="  justify-between flex  ">
                <p className="text-4xl font-semibold">Unlocking Knowledge</p>
                <div className=" hidden md:block py-auto">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                    View All Agents
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container md:flex md:gap-3 md:px-[2%] ">
          <div className="bg-white w-full h-full rounded-lg mb-3 border-3 pb-3">
            <div className="p-3">
              <div className="bg-gray-100 rounded-lg  w-full h-64 p-3">
                <img
                  src={Man1}
                  alt=""
                  className="object-cover w-full h-56 mx-auto"
                />
              </div>
            </div>

            <div className="flex justify-between px-3">
              <div>
                <h1 className="text-xl font-bold">Esther Howard</h1>
                <p className="text-gray-500 ">Design Tutor</p>
              </div>
              <div className="flex">
                <svg
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="ml-1">5.0</p>
              </div>
            </div>
          </div>

          <div className="bg-white  w-full h-full  rounded-lg mb-3 border-3 pb-3">
            <div className="p-3">
              <div className="bg-gray-100 rounded-lg  w-full h-64 p-3">
                <img
                  src={Wmn1}
                  alt=""
                  className="object-cover w-full h-56 mx-auto"
                />
              </div>
            </div>

            <div className="flex justify-between px-3">
              <div>
                <h1 className="text-xl font-bold">Esther Howard</h1>
                <p className="text-gray-500">Design Tutor</p>
              </div>
              <div className="flex">
                <svg
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="ml-1">5.0</p>
              </div>
            </div>
          </div>

          <div className="bg-white  w-full h-full rounded-lg mb-10 border-3 pb-3">
            <div className="p-3">
              <div className="bg-gray-100 rounded-lg  w-full h-64 p-3 ">
                <img
                  src={Wmn2}
                  alt=""
                  className="object-cover w-full h-56 mx-auto"
                />
              </div>
            </div>

            <div className="flex justify-between px-3">
              <div>
                <h1 className="text-xl font-bold">Esther Howard</h1>
                <p className="text-gray-500">Design Tutor</p>
              </div>
              <div className="flex">
                <svg
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="ml-1">5.0</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-center md:hidden">
          <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full ">
            View All Agents
          </button>
        </div>
      </div>
    </div>
  );
}

export default EA;
