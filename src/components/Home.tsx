import React, { useEffect, useState } from 'react';
import axios from 'axios';


export interface Values {
  title: string,
  slug: string,
  description: string,
  price: number,
  currency: string,
  email: string,
  category: object
}

export default function Home() {

  const [data, setData] = useState([] as Values[]);
  useEffect(() => {
      getData();
  }, []);

  const getData = async () => {
    const listings = await axios.get(`http://localhost:5000/listings`);
    setData(listings.data);
    console.log(listings)
  }

  return (
    <div className="flex flex-col items-center bg-gray-200">
      {data.map(listing => (
        <div className="max-w-lg bg-white rounded overflow-hidden shadow-lg my-8 w-3/4 text-center" key={listing.title}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{listing.title}</div>
            <div className="font-medium text-md mb-2">{listing.slug}</div>
            <button className="bg-gray-200 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
