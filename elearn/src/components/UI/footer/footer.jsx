import React, { Fragment } from "react";

import PlayStore from "../../../assets/UI/Footer/gp1.png";
import AppStore from "../../../assets/UI/Footer/aps1.png";
import Logo from "../../../assets/Logo.png";
import Fb from "../../../assets/UI/Footer/fb.png";
import Bing from "../../../assets/UI/Footer/bing.png";
import YT from "../../../assets/UI/Footer/yt.png";
import Twt from "../../../assets/UI/Footer/twt.png";
import Ig from "../../../assets/UI/Footer/ig.png";
import CopyRight from "../../../assets/UI/Footer/cpyr1.png";

function footer() {
  return (
    <Fragment>
      <div className="w-full overflow-x-hidden  relative">
        {/* biru */}
        <div className="bg-blue-600 rounded-2xl p-10 mt-10 md:w-[93%] relative z-10 md:mx-auto -mb-40"> 
          <div className="container text-slate-200 font-sans text-center ">
            <p className="text-lg font-semibol ">
              Unlock Your Learning Journey: Your Ultimate E-learning Destination
            </p>
            <h1 className="text-4xl font-bold my-5">Download the App Now!</h1>
            <div className=" w-2/3 mx-auto">
              <p className="text-md mb-5 font-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora dignissimos repellendus assumenda eligendi similique
                mollitia! Ea, provident!
              </p>
            </div>
          </div>

          <div className="mx-auto flex -ml-2 md:justify-center">
            <img src={PlayStore} alt="" className="w-40 h-12 mr-3" />
            <img src={AppStore} alt="" className="w-40 h-12" />
          </div>
        </div>

            {/* hitam */}
        <div className="bg-slate-800 p-10 pt-52 relative z-0">
          <div className="border-b font-sans md:flex pb-16">
            <div className="md:w-[40%] md:pr-24">
              <div className="flex">
                <img src={Logo} alt="" className="w-14 h-14 -mt-1" />
                <h1 className="text-4xl text-slate-200 ml-1">E-Learn</h1>
              </div>

              <p className="text-slate-600 text-sm  mt-7 mb-10 md:mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                labore nesciunt deserunt eos ad! Sapiente accusamus corrupti
                blanditiis quisquam aperiam quasi repellendus tempore provident
                obcaecati in praesentium molestias, minus totam!
              </p>
              <div className="hidden mb-7 gap-3 md:flex ">
                  <div className="bg-gray-500 p-2  rounded-full">
                    <img src={Fb} alt="" className="w-5 h-5" />
                  </div>
                  <div className="bg-gray-500 p-2  rounded-full">
                    <img src={Bing} alt="" className="w-5 h-5" />
                  </div>
                  <div className="bg-gray-500 p-2  rounded-full">
                    <img src={YT} alt="" className="w-5 h-5" />
                  </div>
                  <div className="bg-gray-500 p-2  rounded-full">
                    <img src={Twt} alt="" className="w-5 h-5" />
                  </div>
                  <div className="bg-gray-500 p-2  rounded-full">
                    <img src={Ig} alt="" className="w-5 h-5" />
                  </div>
                </div>
            </div>

            <div className="md:w-[60%] md:flex">
              <div className="flex md:flex-none md:w-[40%]">
                <div className="w-1/2">
                  <h1 className="text-xl text-slate-200 mb-7">Company</h1>
                  <div className="grid gap-4">
                    <a href="# " className="text-slate-600 text-sm">
                      Home
                    </a>
                    <a href="# " className="text-slate-600 text-sm">
                      Features
                    </a>
                    <a href="# " className="text-slate-600 text-sm">
                      Services
                    </a>
                    <a href="# " className="text-slate-600 text-sm">
                      About Us
                    </a>
                    <a href="# " className="text-slate-600 text-sm">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="w-1/2">
                  <h1 className="text-xl text-slate-200 mb-7">Contact</h1>
                  <div className="grid gap-4">
                    <p className="text-slate-600 text-sm">+0123-456-789</p>
                    <p className="text-slate-600 text-sm">www.example.com</p>
                    <p className="text-slate-600 text-sm">example@gmail.com</p>
                    <p className="text-slate-600 text-sm">
                      56, Rajar Golli, Amborkhana, Sylhet
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-[60%] md:ml-7">
                <div>
                  <h1 className="text-xl text-slate-200 mb-7 mt-10 md:mt-0">
                    Get the latest information
                  </h1>
                  <div className="mb-10 flex">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="rounded-l bg-slate-600 h-12 pl-3 w-full md:w-72"
                    />
                    <div className="">
                      <button className="bg-blue-600 text-white rounded-r w-10 h-12">
                        <ion-icon name="send"></ion-icon>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:hidden">
                  <div className="bg-gray-500 p-2  rounded-full">
                    <img src={Fb} alt="" className="w-5 h-5" />
                  </div>
                  <div className="bg-gray-500 p-2  rounded-full">
                    <img src={Bing} alt="" className="w-5 h-5" />
                  </div>
                  <div className="bg-gray-500 p-2  rounded-full">
                    <img src={YT} alt="" className="w-5 h-5" />
                  </div>
                  <div className="bg-gray-500 p-2  rounded-full">
                    <img src={Twt} alt="" className="w-5 h-5" />
                  </div>
                  <div className="bg-gray-500 p-2  rounded-full">
                    <img src={Ig} alt="" className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="md:hidden md:justify-between">
            <p className="text-slate-600 text-lg flex mt-7">
              Copyright <img src={CopyRight} alt="" className="w-4 h-4 mx-2 " />{" "}
              2023 E-Learn. All
            </p>
            <p className="text-slate-600 text-lg mb-7">Rights Reserved.</p>
            <p className="text-slate-600 text-lg">
              User Terms & Condition | Privacy Policy
            </p>
          </div>

          <div className=" md:flex md:justify-between md:mt-7 hidden">
            <p className="text-slate-600 text-lg flex mt-7 md:mt-0">
              Copyright <img src={CopyRight} alt="" className="w-4 h-4 mx-2 " />{" "}
              2023 E-Learn. All Rights Reserved.
            </p>
            <p className="text-slate-600 text-lg">
              User Terms & Condition | Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default footer;
