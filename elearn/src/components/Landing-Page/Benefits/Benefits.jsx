import React from "react";

function Benefits() {
  return (
    <div className="bg-gray-200 font-sans pb-7">
      <div className="pl-[5%] pr-[5%]">
        <div className="flex mb-2">
          <div className="bg-blue-600 w-3 h-[2px] my-auto " />
          <p className="ml-2 font-medium">Benefits of Online Learning App</p>
        </div>
        <div className="md:flex md:justify-between md:mb-6">
          <div className="md:w-1/2">
            <span className="text-4xl font-semibold text-blue-600">
              Exclusive benefits
              <span className="text-black"><br className="hidden md:block"/> of E-Learn App</span>
            </span>
          </div>

          <div className="md:w-1/2">
            <div className="border-l-4 border-orange-300 md:border-orange-300 mt-5 md:mt-0">
              <p className="ml-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                impedit officia iusto ullam magni incidunt esse quidem veritatis
                maiores?
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-4 md:flex md:justify-between md:gap-4">
          <div className="mb-4">
            <div className="bg-blue-200 md:bg-white w-14 h-14 rounded-lg mb-4">
              <div className="text-blue-500 text-3xl my-auto items-center text-center justify-center pt-3">
                <ion-icon name="stopwatch"></ion-icon>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-2xl mb-1">Cost Savings</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio voluptatibus magni tempore vel iste enim odio vero
                veritatis sapiente.
              </p>
            </div>
          </div>

          <div className="mb-4">
            <div className="bg-blue-200  md:bg-white w-14 h-14 rounded-lg mb-4">
              <div className="text-blue-500 text-3xl my-auto items-center text-center justify-center pt-3">
                <ion-icon name="people"></ion-icon>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-2xl mb-1">Expert Instructor</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio voluptatibus magni tempore vel iste enim odio vero
                veritatis sapiente.
              </p>
            </div>
          </div>

          <div className="mb-4">
            <div className="bg-blue-200  md:bg-white w-14 h-14 rounded-lg mb-4">
              <div className="text-blue-500 text-3xl my-auto items-center text-center justify-center pt-3">
                <ion-icon name="medal"></ion-icon>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-2xl mb-1">Certification</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio voluptatibus magni tempore vel iste enim odio vero
                veritatis sapiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
