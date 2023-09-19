import React from "react";

import Wmn1 from "../../../assets/components/Landing-Page/Testimonials/wmn1.jpg";

function TestiMo() {
  const divStyle = {
    backgroundImage: `url(${Wmn1})`,
    backgroundSize: "cover", // Sesuaikan dengan kebutuhan Anda
    backgroundRepeat: "no-repeat", // Sesuaikan dengan kebutuhan Anda
    width: "37px", // Sesuaikan dengan kebutuhan Anda
    height: "37px", // Sesuaikan dengan kebutuhan Anda
    borderRadius: "50%", // Untuk membuatnya berbentuk bulat seperti sebelumnya
  };
  return (
    <div className="mb-24">
      <div className="pl-[5%] pr-[5%]">
        <div className="flex mb-2 justify-center">
          <div className="bg-blue-600 w-3 h-[2px] my-auto " />
          <p className="ml-2 font-medium">Testimonials</p>
        </div>

        <div className="text-center mt-3 mb-7">
          <span className="text-4xl font-semibold">
            Our Customer <span className="text-blue-600"><br className="hidden md:block"/>Testimonials</span>
          </span>
        </div>

        <div className="flex px-2">
          <div className="bg-white shadow-xl rounded-lg w-full p-3">
            <div className="flex">
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="ml-2 font-medium">5.0</p>
            </div>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              reprehenderit corrupti harum! Quis, temporibus? Recusandae ea
              harum perspiciatis! Quaerat numquam cupiditate dicta. Quasi earum
              assumenda ipsam labore explicabo sed incidunt magni, quidem
              provident sunt maxime commodi fugit!
            </p>

            <div className="flex justify-between my-3">
              <div className="flex">
                <div className="rounded-full mt-1" style={divStyle}></div>
                <div className="ml-2">
                  <h1 className="font-semibold">Henry, Arthur</h1>
                  <p className="text-gray-500 text-sm">CEO, Food Express</p>
                </div>
              </div>

              <div>
                <h1>(Kutip)</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="  lg:flex gap-4  my-3 text-center justify-center mt-10">
          <button className="h-10 w-10 rounded-full  bg-gray-800 hover:bg-blue-600  mr-3 md:mr-0">
            <span className="text-xl text-white">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </span>
          </button>
          <button className="h-10 w-10 rounded-full  bg-gray-800 hover:bg-blue-600  ">
            <span className="text-xl text-white">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestiMo;
