import React from 'react';

export default function ListingDetails() {
  return (
    <div className="flex flex-col items-center bg-gray-200 h-screen">
        <div className="bg-white rounded overflow-hidden shadow-lg my-8 w-4/5 md:w-3/6 text-center">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Samsung S8 plus</div>
            <div className="font-medium text-md mb-2">Samsung S8 plus for sale with 1 year warranty</div>
            <div className="text-xs text-blue-600">Date Online: 11/09/2020</div>
            <div className="text-md my-8">Samsung S8 plus for sale with 1 year warranty. In good condition. Selling because I got an upgrade.</div>
            <div className="text-lg font-semibold text-blue-600 mt-8">ZAR 100</div>
            <div className="flex items-end mt-8 mb-2">
              <div className="flex items-end justify-start">
                <div className="font-medium text-sm text-md mt-2 mr-2">Contact:</div>
                <div className="font-medium text-sm text-md text-blue-600">example@gmail.com</div>
              </div>
              <div className="text-xs flex w-full justify-end">Category: Electronics</div>
            </div>
          </div>
        </div>
    </div>
  );
}