import React from "react";

import img1 from "../../../assets/components/Landing-Page/How-it-Works/img1.jpg";

function HIT() {
  return (
    <div className="pl-[5%] pr-[5%] font-sans mb-10">
      <div className="flex mb-2 justify-center">
        <div className="bg-blue-600 w-3 h-[2px] my-auto " />
        <p className="ml-2 font-medium">How it Works</p>
      </div>

      <div className="text-center mt-3 mb-12">
        <span className="text-4xl font-semibold ">
          Unlocking Learning with
          <span className="text-blue-600">
            <br className="hidden md:block" /> Four Easy Steps
          </span>
        </span>
      </div>

      <div className="md:flex justify-between">
        <div className="container md:pl-10 relative   pt-5">

          {/* biru */}
          <div className="bg-blue-500 w-72 md:w-80 h-80 rounded-2xl "></div>

          {/* card */}
          
          <div className="absolute  -top-3 left-5  md:left-16 p-2 rounded mb-3  md:w-96 ">
          <div className=" p-2 rounded mb-3 shadow-md md:w-96 bg-white">
            <div className="flex">
              <div className="w-24  rounded p-1 mr-2">
                <img
                  src={img1}
                  alt=""
                  className="object-cover rounded w-[90px] h-[90px] "
                />
              </div>
              <div className="mt-1">
                <h1 className="font-semibold text-lg">Introduction of Figma</h1>
                <div className="flex">
                  <div className="  pt-1 text-gray-500 text-md">
                    <ion-icon name="person"></ion-icon>
                  </div>

                  <p className="text-gray-500 ml-2">Jacob Jones</p>
                </div>
                <div className="flex">
                  <h3 className="text-blue-500 font-semibold">$180.00</h3>
                  <div className="w-24 h-auto bg-orange-100 rounded-xl text-center ml-5">
                    <p className="text-yellow-400">Best seller</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" p-2 rounded mb-3 shadow-md md:w-96 bg-white">
            <div className="flex">
              <div className="w-24  rounded p-1 mr-2">
                <img
                  src={img1}
                  alt=""
                  className="object-cover rounded w-[90px] h-[90px] "
                />
              </div>
              <div className="mt-1">
                <h1 className="font-semibold text-lg">Introduction of Figma</h1>
                <div className="flex">
                  <div className="  pt-1 text-gray-500 text-md">
                    <ion-icon name="person"></ion-icon>
                  </div>

                  <p className="text-gray-500 ml-2">Jacob Jones</p>
                </div>
                <div className="flex">
                  <h3 className="text-blue-500 font-semibold">$180.00</h3>
                  <div className="w-24 h-auto bg-orange-100 rounded-xl text-center ml-5">
                    <p className="text-yellow-400">Best seller</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" p-2 rounded mb-3 shadow-md md:w-96 bg-white">
            <div className="flex">
              <div className="w-24  rounded p-1 mr-2">
                <img
                  src={img1}
                  alt=""
                  className="object-cover rounded w-[90px] h-[90px] "
                />
              </div>
              <div className="mt-1">
                <h1 className="font-semibold text-lg">Introduction of Figma</h1>
                <div className="flex">
                  <div className="  pt-1 text-gray-500 text-md">
                    <ion-icon name="person"></ion-icon>
                  </div>

                  <p className="text-gray-500 ml-2">Jacob Jones</p>
                </div>
                <div className="flex">
                  <h3 className="text-blue-500 font-semibold">$180.00</h3>
                  <div className="w-24 h-auto bg-orange-100 rounded-xl text-center ml-5">
                    <p className="text-yellow-400">Best seller</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          
        </div>

        <div className="  md:-ml-32 md:pr-32">
          <div>
            <div className="mb-4 flex mt-24 md:mt-0">
              <div className="bg-gray-800  w-36 h-14 md:w-24  rounded-full mb-6">
                <div className="text-white text-2xl my-auto items-center text-center justify-center pt-3">
                  <ion-icon name="document"></ion-icon>
                </div>
              </div>
              <div className="ml-2">
                <h1 className="font-semibold text-2xl mb-1">
                  Discover Latest Courses
                </h1>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  perferendis voluptatibus dolore nulla ipsum ut in!
                </p>
              </div>
            </div>

            <div className="mb-4 flex">
              <div className="bg-blue-100  w-36 h-14 md:w-24  rounded-full mb-6">
                <div className="text-blue-500 text-2xl my-auto items-center text-center justify-center pt-3">
                  <ion-icon name="document-text"></ion-icon>
                </div>
              </div>
              <div className="ml-2">
                <h1 className="font-semibold text-2xl mb-1">Enroll & Access</h1>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                  non dolores atque ipsa libero minus debitis.
                </p>
              </div>
            </div>

            <div className="mb-4 flex">
              <div className="bg-blue-100  w-36 h-14 md:w-24 rounded-full mb-6">
                <div className="text-blue-500 text-2xl my-auto items-center text-center justify-center pt-3">
                  <ion-icon name="videocam"></ion-icon>
                </div>
              </div>
              <div className="ml-2">
                <h1 className="font-semibold text-2xl mb-1">
                  Learn & Practice
                </h1>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                  non dolores atque ipsa libero minus debitis.
                </p>
              </div>
            </div>

            <div className="mb-4 flex">
              <div className="bg-blue-100  w-36 h-14 md:w-24  rounded-full mb-4">
                <div className="text-blue-500 text-2xl my-auto items-center text-center justify-center pt-3">
                  <ion-icon name="ribbon"></ion-icon>
                </div>
              </div>
              <div className="ml-2">
                <h1 className="font-semibold text-2xl mb-1">Certify & Excel</h1>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                  non dolores atque ipsa libero minus debitis.
                </p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default HIT;
