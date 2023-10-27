import React from 'react'

export default function Results() {
  return (
    <div className="">
      <div className="bg-gradient-to-t from-indigo-800 to-indigo-500 w-auto z-20 h-auto lg:rounded-3xl rounded-b-3xl">
        <h1 className="flex justify-center text-indigo-100 text-lg p-8">
          Your Results
        </h1>
        <span className="flex justify-center -mt-2">
          <span className="rounded-full bg-gradient-to-b from-indigo-800 to-indigo-600 w-44 h-44 ">
            <span className="flex justify-center text-7xl font-bold text-indigo-50 mt-12">
              76
            </span>
            <div className="flex justify-center text-indigo-200">
              of <span className="ml-1">100</span>
            </div>
          </span>
        </span>
        <div className="flex justify-center text-2xl mt-5 text-indigo-100">
          Great
        </div>
        <span className="text-indigo-300 text-sm flex justify-center items-center w-48 mx-auto text-center pt-3 pb-8">
          You scored higher than 65% of the people who have taken these tests
        </span>
      </div>
    </div>
  );
}
