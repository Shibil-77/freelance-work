import React from "react";

const Gallery = () => {
  return (
    <div className=" bg-[#323033]  mt-10 lg:container">
      <div className="lg:flex block">
        <div className="w-full lg:w-6/12   pt-10 py-8">
          <h1 className="lg:text-7xl text-center text-white font-extrabold">
            TAKE A LOOK{" "}
          </h1>
          <hr className="w-9/12 h-[4px]  mx-auto  bg-white" />
          <div className="flex">
            <div>
              <button
                type="button"
                class="text-black font-mono  mt-10 ml-20  shadow-sm bg-[#ffffff] bg-opacity-90 px-16 hover:bg-slate-100 focus:ring-4 focus:ring-lue-300 font-medium rounded-lg text-lg  py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Join
              </button>
              <div className="flex pl-24">
                <ul id="Frames">
                  <li class="Frame">
                    <a href="http://www.flickr.com/photos/55582829@N05/7617079532/in/faves-sealour/">
                      <img
                        src="http://farm8.staticflickr.com/7129/7617079532_0fddbaa8cd_z.jpg"
                        alt="Hanafubuki - Cherry blossom blizzard"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <ul id="Frames">
                <li class="Frame">
                  <a href="http://www.flickr.com/photos/55582829@N05/7617079532/in/faves-sealour/">
                    <img
                      src="http://farm8.staticflickr.com/7129/7617079532_0fddbaa8cd_z.jpg"
                      alt="Hanafubuki - Cherry blossom blizzard"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 flex justify-between">
          <div className="lg:w-7/12">
            <h1 className="text-white font-serif mt-2 text-center">
              Image art
            </h1>
            <ul id="Frames">
              <li class="Frame">
                <a href="http://www.flickr.com/photos/55582829@N05/7617079532/in/faves-sealour/">
                  <img
                    src="http://farm8.staticflickr.com/7129/7617079532_0fddbaa8cd_z.jpg"
                    alt="Hanafubuki - Cherry blossom blizzard"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-5/12 flex justify-start mt-48">
            <ul id="Frames" >
              <li class="Frame">
                <a href="http://www.flickr.com/photos/55582829@N05/7617079532/in/faves-sealour/">
                  <img
                    src="http://farm8.staticflickr.com/7129/7617079532_0fddbaa8cd_z.jpg"
                    alt="Hanafubuki - Cherry blossom blizzard"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
