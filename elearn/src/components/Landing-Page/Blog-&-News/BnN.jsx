import React from "react";

import img1 from "../../../assets/components/Landing-Page/Blog-&-News/img1.jpg";
import img2 from "../../../assets/components/Landing-Page/Blog-&-News/img2.jpeg";
import img3 from "../../../assets/components/Landing-Page/Blog-&-News/img3.jpg";

function blogAndNews() {
  return (
    <div className="container w-full font-sans mb-10 pl-[5%] pr-[5%]">
      <div className="flex mb-2 ">
        <div className="bg-blue-600 w-3 h-[2px] my-auto" />
        <p className="ml-2 font-medium">Blog and News</p>
      </div>

      <div className="pr-[1%] pl-[1%] ">
        <div className="md:flex md:justify-between md:mb-6">
          <div className="md:w-1/2">
            <span className="text-4xl font-semibold">
              Our Latest <span className="text-blue-600">Blog</span> &
              <span className="text-blue-600">News</span>
            </span>
          </div>

          <div className="md:w-1/2">
            <div className="border-l-4 border-blue-600 md:border-orange-300 mt-5 md:mt-0">
              <p className="ml-2 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                impedit officia iusto ullam magni incidunt esse quidem veritatis
                maiores?
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex md:gap-7">
          <div className="bg-white mt-4 rounded-lg border shadow-lg">
            <img
              src={img1}
              alt=""
              className="object-cover rounded-t-lg h-52 w-full"
            />

            <div className="p-3">
              <div className="rounded-md bg-gray-100 w-12 p-1 ml-2">
                <p className="text-blue-600 text-sm font-medium">House</p>
              </div>

              <h1 className="font-semibold text-xl my-3">
                Smart Money Moves: Building Your Emergency Fund
              </h1>
              <div className="flex justify-between">
                <div className="flex">
                  <div className="text-blue-600 text-lg">
                    <ion-icon name="person-outline"></ion-icon>
                  </div>
                  <p className="text-gray-500 ml-2">by Admin</p>
                </div>
                <div className="flex">
                  <div className="text-blue-600 text-lg">
                    <ion-icon name="calendar-outline"></ion-icon>
                  </div>
                  <p className="text-gray-500  ml-2">23 Sep, 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white mt-4 rounded-lg border shadow-lg">
            <img
              src={img2}
              alt=""
              className="object-cover rounded-t-lg h-52 w-full"
            />

            <div className="p-3">
              <div className="rounded-md bg-gray-100 w-12 p-1 ml-2">
                <p className="text-blue-600 text-sm font-medium">Offers</p>
              </div>

              <h1 className="font-semibold text-xl my-3">
                Exploring the Timeless Appeal of Minimalist Art and Design
              </h1>
              <div className="flex justify-between">
                <div className="flex">
                  <div className="text-blue-600 text-lg">
                    <ion-icon name="person-outline"></ion-icon>
                  </div>
                  <p className="text-gray-500 ml-2 ">by Admin</p>
                </div>
                <div className="flex">
                  <div className="text-blue-600 text-lg">
                    <ion-icon name="calendar-outline"></ion-icon>
                  </div>
                  <p className="text-gray-500  ml-2">23 Sep, 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white mt-4 rounded-lg border shadow-lg">
            <img
              src={img3}
              alt=""
              className="object-cover rounded-t-lg h-52 w-full"
            />

            <div className="p-3">
              <div className="rounded-md bg-gray-100 w-[74px] p-1 ml-2">
                <p className="text-blue-600 text-sm font-medium">Sell Home</p>
              </div>

              <h1 className="font-semibold text-xl my-3">
                How to Manage and Improve Yout Well-being
              </h1>
              <div className="flex justify-between">
                <div className="flex">
                  <div className="text-blue-600 text-lg">
                    <ion-icon name="person-outline"></ion-icon>
                  </div>
                  <p className="text-gray-500 ml-2">by Admin</p>
                </div>
                <div className="flex">
                  <div className="text-blue-600 text-lg">
                    <ion-icon name="calendar-outline"></ion-icon>
                  </div>
                  <p className="text-gray-500  ml-2">23 Sep, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default blogAndNews;
