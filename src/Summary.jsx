import React from "react";
import Reactions from '../src/images/icon-reaction.svg';
import Memory from '../src/images/icon-memory.svg';
import Verbal from '../src/images/icon-verbal.svg';
import Visual from "../src/images/icon-visual.svg";

export default function Summary() {
  return (
    <div>
      <div className="lg:rounded-3xl bg-white w-auto h-auto justify-center -pl-10">
        <h1 className="pt-8 pl-8 text-lg font-bold">Summary</h1>
        <div className="grid justify-center">
          <div className="flex p-2 bg-red-100 w-60 rounded-lg mt-7">
            <span className="">
              <img src={Reactions} alt="reactions" className="w-4 mt-1 ml-1" />
            </span>
            <span className="text-red-500 ml-3">Reactions</span>
            <span className="ml-14 font-bold">80</span>
            <span className="ml-1 text-gray-500">/ 100</span>
          </div>
          <div className="flex p-2 bg-red-50 w-60 rounded-lg mt-4">
            <span className="">
              <img src={Memory} alt="memory" className="w-4 mt-1 ml-1" />
            </span>
            <span className="ml-3 text-yellow-500">Memory</span>
            <span className="ml-16 font-bold pl-1">92</span>{" "}
            <span className="ml-1 text-gray-500">/ 100</span>
          </div>
          <div className="flex p-2 bg-green-50 w-60 rounded-lg mt-4">
            <span className="">
              <img src={Verbal} alt="verbal" className="w-4 mt-1 ml-1" />   
            </span>
            <span className="ml-3 text-green-500">Verbal</span>
            <span className="ml-16 font-bold pl-4">61</span> 
            <span className="ml-1 text-gray-500">/ 100</span>
          </div>
          <div className="flex p-2 bg-blue-50 w-60 rounded-lg mt-4">
            <span className="">
              <img src={Visual} alt="visual" className="w-4 mt-1 ml-1" />
            </span>
            <span className="ml-3 text-blue-500">Visual</span>
            <span className="ml-16 font-bold pl-4">76</span>
            <span className="ml-1 text-gray-500">/ 100</span>
          </div>
        </div>

        <div className="flex justify-center mt-9 pb-10">
          <button className="lg:bg-gradient-to-t from-indigo-800 to-indigo-600 p-2.5 bg-slate-800 w-60 text-white rounded-3xl">
            continue
          </button>
        </div>
      </div>
    </div>
  );
}
